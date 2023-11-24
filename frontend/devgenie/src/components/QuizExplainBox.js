import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Box,
} from '@mui/material';
import React, { useState } from 'react';

const QuizExplainBox = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To solve to this problem, please enter your answer here.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin='dense'
            id='answer'
            label='show your answer'
            multiline
            rows={4}
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuizExplainBox;
