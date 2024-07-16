import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <Typography variant="h6" component="h4" gutterBottom>
      Current Time: {time}
    </Typography>
  );
};

export default RealTimeClock;
