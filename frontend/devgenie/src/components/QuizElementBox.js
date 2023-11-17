import { Link, Outlet } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import QuizeDialog from './QuizExplainBox';

const QuizElementBox = ({ title, numberSolved, averageScore, id }) => {
  return (
    <div>
      <Card variant='outlined' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {title}
          </Typography>
          <Typography variant='body2'>
            <br />푼 사람 수 : {numberSolved} 명 평균 점수 : {averageScore} 점
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            // width: '100%',
            // height: 'auto',
          }}
        >
          <QuizeDialog />
        </CardActions>
      </Card>
    </div>
  );
};

export default QuizElementBox;
