import { Link, Outlet } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuizDialog from './QuizExplainBox';
import QuizFullDialog from './QuizExplainFullBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        return 'ochre';
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={4}
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Card variant='outlined' sx={{ minWidth: 275, minHeight: 240 }}>
          <CardContent>
            <Chip label={tag} color={colorForTag(tag)} />
          </CardContent>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color='text.secondary'
              gutterBottom
            >
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
            <QuizDialog title={title} id={id} />
          </CardActions>
        </Card>
      </Paper>
    </ThemeProvider>
  );
};

export default QuizElementBox;
