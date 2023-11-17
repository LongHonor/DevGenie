import React from 'react';
import Header from '../organisms/NavigationBar';

import { listData } from '../questionList';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const QuizListPage = () => {
  return (
    <div>
      <Header />
      QuizList
      <>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid container xs={4} md={7}>
            {listData.map((list) => (
              <Grid xs={12} key={list.id}>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      {list.title}
                    </Typography>
                    <Typography variant='body2'>
                      <br />푼 사람 수 : {list.numberSolved} 명 평균 점수 :{' '}
                      {list.averageScore} 점
                    </Typography>
                  </CardContent>
                </Card>
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
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default QuizListPage;
