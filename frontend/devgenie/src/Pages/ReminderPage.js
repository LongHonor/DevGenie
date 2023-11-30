import React, { useEffect, useState } from 'react';
import Header from '../organisms/NavigationBar';
import apiClient from '../api';
import { dataTagSymbol, useQuery } from '@tanstack/react-query';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MyQuizDialog from '../components/MyQuizExplainBox';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { motion } from 'framer-motion';
import {
  content,
  contentone,
  contenttwo,
  contentthree,
  contentfour,
} from '../myQuestionList';
import PageEffect from '../components/PageWrapper';

const theme = createTheme({
  palette: {
    solved: {
      main: '#02d1b2',
      light: '#34dac1',
      dark: '#01927c',
      contrastText: '#e0f2f1',
    },
    solvedtwo: {
      main: '#00b78f',
      light: '#34dac1',
      dark: '#01927c',
      contrastText: '#e0f2f1',
    },
    solvedthree: {
      main: '#009870',
      light: '#34dac1',
      dark: '#01927c',
      contrastText: '#e0f2f1',
    },
    solvedfour: {
      main: '#006944',
      light: '#34dac1',
      dark: '#01927c',
      contrastText: '#e0f2f1',
    },
  },
});

const ReminderPage = () => {
  const id = 9;
  const title = 'Index의 정의와 장단점을 설명해주세요.';

  const [params, setParams] = useState(myQuizParams);

  // const [obStatusZero, setObStatusZero] = useState();
  const [obStatusOne, setObStatusOne] = useState();
  const [obStatusTwo, setObStatusTwo] = useState(contenttwo);
  const [obStatusThree, setObStatusThree] = useState(contentthree);
  const [obStatusFour, setObStatusFour] = useState(contentfour);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['reminder', URL, params],
    queryFn: () =>
      apiClient.get('/myquiz?', { params }).then((res) => res.data),
    select: (data) => filter(data),
  });

  function filter(data) {
    setObStatusOne(
      data.filter((entry) => entry.oblivionStatus === 'OBLIVION_STATUS_1'),
    );
    setObStatusTwo(
      data.filter((entry) => entry.oblivionStatus === 'OBLIVION_STATUS_2'),
    );
    setObStatusThree(
      data.filter((entry) => entry.oblivionStatus === 'OBLIVION_STATUS_3'),
    );
    setObStatusFour(
      data.filter((entry) => entry.oblivionStatus === 'OBLIVION_STATUS_4'),
    );
    console.log(obStatusOne);
  }

  const colorForTag = (idx) => {
    switch (idx) {
      case 0:
        return 'solved.main';
      case 1:
        return 'solvedtwo.main';
      case 2:
        return 'solvedthree.main';
      case 3:
        return 'solvedfour.main';
    }
  };
  const caption = (idx) => {
    switch (idx) {
      case 0:
        return '1회 학습(d-3)';
      case 1:
        return '2회 학습(d-7)';
      case 2:
        return '3회 학습(d-30)';
      case 3:
        return '4회 학습(d-60)';
    }
  };
  const contents = (idx) => {
    switch (idx) {
      case 0:
        return obStatusOne;
      case 1:
        return obStatusTwo;
      case 2:
        return contentthree;
      case 3:
        return contentfour;
    }
  };
  const variantP = {
    first: { opacity: 0, y: -100 },
    animationEnd: {
      opacity: 1,
      y: 50,
      transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };
  const variantC = {
    first: { opacity: 0, y: -150 },
    animationEnd: { opacity: 1, y: 0 },
  };
  const solvedContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };
  const solvedItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <PageEffect>
      <ThemeProvider theme={theme}>
        <Header />

        <Grid container spacing={1}>
          <Grid xs={8} xsOffset={2} sx={{ paddingTop: '3%' }}>
            <Paper elevation={7}>
              <Card variant='outlined' sx={{ minHeight: 200 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    '--Grid-borderWidth': '1px',
                    'borderTop': 'var(--Grid-borderWidth) solid',
                    'borderLeft': 'var(--Grid-borderWidth) solid',
                    'borderColor': 'divider',
                    '& > div': {
                      borderRight: 'var(--Grid-borderWidth) solid',
                      borderBottom: 'var(--Grid-borderWidth) solid',
                      borderColor: 'divider',
                    },
                  }}
                  component={motion.div}
                  variants={solvedContainer}
                  initial='hidden'
                  animate='visible'
                >
                  {[...Array(4)].map((_, index) => (
                    <Grid
                      key={index}
                      {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      minHeight={160}
                      component={motion.div}
                      variants={solvedItem}
                      sx={{ bgcolor: colorForTag(index) }}
                      display='flex'
                    >
                      {contents(index)?.map((list) => (
                        <Avatar key={list.memberQuizId}>
                          <MyQuizDialog
                            title={title}
                            id={id}
                            bid={list.memberQuizId}
                          />
                        </Avatar>
                      ))}
                    </Grid>
                  ))}
                  {[...Array(4)].map((_, index) => (
                    <Grid xs={3} key={index}>
                      <Typography sx={{ color: '#006064' }}>
                        {caption(index)}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Paper>
          </Grid>

          <Grid
            container
            xs={8}
            xsOffset={2}
            sx={{
              pt: 0,
            }}
          >
            <Card
              sx={{
                minWidth: '50vw',
              }}
              component={motion.div}
              variants={variantP}
              initial='first'
              animate='animationEnd'
            >
              <CardContent sx={{ display: 'flex' }}>
                {content?.map((list) => (
                  <Avatar
                    sx={{ margin: 2 }}
                    component={motion.div}
                    variants={variantC}
                    transition={{
                      ease: 'easeIn',
                      type: 'spring',
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 2,
                      transition: {
                        duration: 4,
                        delay: 0.3,
                        ease: 'linear',
                        repeat: Infinity,
                      },
                    }}
                    key={list.memberQuizId}
                  >
                    {list.memberQuizId}
                  </Avatar>
                ))}
              </CardContent>
              <CardActions
                sx={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',

                  p: 0,
                }}
              >
                <AccessAlarmIcon fontSize='large' />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </PageEffect>
  );
};
const myQuizParams = {
  tag: '',
  page: '',
  size: '',
};

export default ReminderPage;
