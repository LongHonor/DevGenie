import React from 'react';
import Header from '../organisms/NavigationBar';

import Quiz from '../components/QuizElementBox';
import Feedback from '../components/AiFeedbackBox';
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
