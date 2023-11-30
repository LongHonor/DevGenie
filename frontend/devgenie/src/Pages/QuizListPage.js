import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Header from '../organisms/NavigationBar';
import Quiz from '../components/QuizElementBox';
import Feedback from '../components/AiFeedbackBox';
import PageNavBar from '../components/PaginationBar';
import { listData } from '../questionList';
import { taglist } from '../tagList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

import apiClient from '../api';
import { Autocomplete, TextField, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PageEffect from '../components/PageWrapper';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#ffeb3b',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

const QuizListPage = () => {
  const [tagVal, setTagVal] = useState([]);

  const [serchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(quizParams);
  const page = parseInt(serchParams.get('page') || '1', 10);
  const size = 4;

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['quizlist', URL, params],
    queryFn: () => apiClient.get('/quiz?', { params }).then((res) => res.data),
    // refetchOnWindowFocus: false,
    enabled: !!params,
  });

  useEffect(() => {
    const selectedTags = tagVal.map((tag) => {
      return tag.id;
    });
    setParams({
      ...params,
      tag: tagVal[0] ? selectedTags : '',
      page: page,
      size: size,
    });
  }, [page, tagVal]);

  const colorForTag = (tag) => {
    switch (tag) {
      case '데이터베이스':
        return 'primary';
      case '네트워크':
        return 'warning';
      case '운영체제':
        return 'success';
      case '자료구조':
        return 'ochre';
    }
  };
  const tagValHtml = tagVal.map((option, index) => {
    const label = option.title || option;

    return (
      <Chip
        key={label}
        label={label}
        color={colorForTag(label)}
        sx={{ m: 1 }}
        onDelete={() => {
          setTagVal(tagVal.filter((entry) => entry !== option));
        }}
      />
    );
  });

  return (
    <PageEffect>
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container spacing={2}>
          <Autocomplete
            multiple
            limitTags={1}
            id='multiple-limit-tags'
            options={taglist}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300, p: 2 }}
            onChange={(e, newValue) => setTagVal(newValue)}
            renderTags={() => {}}
            renderInput={(params) => (
              <TextField
                {...params}
                label='tag'
                variant='standard'
                placeholder='Choice'
              />
            )}
          />
          <Grid>{tagValHtml}</Grid>
        </Grid>
        <>
          <Grid container spacing={3} columns={{ xs: 4, md: 12 }} xsOffset={3}>
            <Grid container xs={2} md={7} spacing={3}>
              {data?.content.map((list) => (
                <Grid xs={4} md={6} key={list.quizId}>
                  <Quiz
                    title={list.quizContent}
                    tag={list.tag}
                    key={list.quizId}
                    id={list.quizId}
                  />
                </Grid>
              )) ?? null}
            </Grid>
          </Grid>
          <PageNavBar currentpage={page} />
        </>
      </ThemeProvider>
    </PageEffect>
  );
};

const quizParams = {
  tag: '',
  page: '',
  size: '',
  sort: 'asc',
};

export default QuizListPage;
