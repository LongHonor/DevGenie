import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';

const AiFeedbackBox = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        autoFocus
        variant='outlined'
        size='small'
        onClick={handleClickOpen}
      >
        confirm
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Card variant='outlined' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              채점 결과
            </Typography>
            <Typography variant='body2'>
              ~~~~~~~~~~ <br />
              ~~~~~~~~~~~~
              <br /> ~~~~~~~~~~~~~~
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClose}>Ok</Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
};

export default AiFeedbackBox;
