import React, { useEffect, useState } from 'react';
import Header from '../organisms/NavigationBar';

import Quiz from '../components/QuizElementBox';
import Feedback from '../components/AiFeedbackBox';
import { listData } from '../questionList';
import { taglist } from '../tagList';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Autocomplete,
  TextField,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const QuizListPage = () => {
  const [tagVal, setTagVal] = useState([]);
  const colorForTag = (tag) => {
    switch (tag) {
      case '데이터베이스':
        return 'primary';
      case '네트워크':
        return 'warning';
      case '운영체제':
        return 'success';
      case '자료구조':
        return 'info';
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
    <div>
      <Header />
      QuizList
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid container xs={4} md={7}>
            {listData.map((list) => (
              <Grid xs={12} key={list.id}>
                <Quiz
                  title={list.title}
                  numberSolved={list.numberSolved}
                  averageScore={list.averageScore}
                  tag={list.tag}
                  key={list.id}
                  id={list.id}
                />
              </Grid>
            ))}
          </Grid>
          <Grid xs={4} md={5}>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  hello
                </Typography>
              </CardContent>
              <CardContent>
                <Feedback />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default QuizListPage;
