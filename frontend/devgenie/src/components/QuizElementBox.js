import { Link, Outlet } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import React, { useState } from 'react';
import QuizeDialog from './QuizExplainBox';

const QuizElementBox = ({ title, numberSolved, averageScore, id, tag }) => {
  const colorForTag = (tag) => {
    switch (tag) {
      case 'DATABASE':
        return 'primary';
      case 'NETWORK':
        return 'warning';
      case 'OPERATING_SYSTEM':
        return 'success';
      case 'DATA_STRUCTURE':
        return 'info';
    }
  };
  return (
    <div>
      <Card variant='outlined' sx={{ minWidth: 275 }}>
        <CardContent>
          <Chip label={tag} color={colorForTag(tag)} />
          <Typography sx={{ fontSize: 20 }} color='text.secondary' gutterBottom>
            {title}
          </Typography>
          <Divider variant='middle' />
          <Typography variant='body2'></Typography>
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
          <QuizeDialog title={title} />
        </CardActions>
      </Card>
    </div>
  );
};

export default QuizElementBox;
