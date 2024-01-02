import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import apiClient from '../api';

const QuizExplainBox = ({ title, id }) => {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmiit = () => {
    apiClient
      .post('/quiz/solve/' + id, { submissionAnswer: answer })
      .then((res) => setResult(res.data));
  };
  return (
    <>
      <Button
        autoFocus
        variant='outlined'
        size='small'
        onClick={handleClickOpen}
      >
        try
      </Button>

      <Dialog open={open} onClose={handleClose} sx={{ minWidth: 400 }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin='dense'
            id='answer'
            label='답안을 입력해 주세요'
            multiline
            rows={4}
            fullWidth
            variant='standard'
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            {result ? result.point : '??'}점
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText variant='outlined'>
            {result ? result.feedback : <></>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleSubmiit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuizExplainBox;
