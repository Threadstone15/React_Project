import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import AnimatedElement from './AnimatedElement';
import RealTimeClock from './RealTimeClock';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Home = () => {
  return (
    <CenteredContainer>
      <WelcomeMessage />
      <RealTimeClock />
    </CenteredContainer>
  );
};

export default Home;
