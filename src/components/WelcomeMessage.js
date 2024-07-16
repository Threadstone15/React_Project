import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const WelcomeMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setMessage('Good Morning');
    } else if (hour < 18) {
      setMessage('Good Afternoon');
    } else {
      setMessage('Good Evening');
    }
  }, []);

  return (
    <Typography variant="h4" component="h2" gutterBottom>
      {message}
    </Typography>
  );
};

export default WelcomeMessage;
