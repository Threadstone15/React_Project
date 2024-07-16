import React from 'react';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

const AnimatedElement = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <Typography variant="h5" component="h3" gutterBottom>
        This element fades in on render.
      </Typography>
    </animated.div>
  );
};

export default AnimatedElement;
