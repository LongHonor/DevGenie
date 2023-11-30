import React, { useState } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import apiClient from '../api';
import { useQuery } from '@tanstack/react-query';

import Header from '../organisms/NavigationBar';
import Quiz from '../components/QuizElementBox';

const HomePage = () => {
  const [params, setParams] = useState(randomQuizParams);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['random', URL, params],
    queryFn: () =>
      apiClient.get('/quiz/random?', { params }).then((res) => res.data),
  });
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Card
            variant='outlined'
            alignItems='center'
            sx={{ border: 'none', display: 'flex', justifyContent: 'center' }}
          >
            <CardMedia
              component='img'
              image={'/devgenie_logo.png'}
              sx={{
                paddingTop: '3%',
                maxWidth: 270,
              }}
              title='dev logo'
            />
          </Card>
        </Grid>
        <Grid xs={12}>
          <Typography variant='h5' gutterBottom>
            Today Quiz
          </Typography>
        </Grid>
        <Grid container columns={{ xs: 4, md: 12 }}>
          {data?.map((list) => (
            <Grid xs={4} md={6} key={list.quizId}>
              <Quiz
                title={list.quizContent}
                tag={list.tag}
                key={list.quizId}
                id={list.quizId}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
const randomQuizParams = {
  count: '4',
};
export default HomePage;
