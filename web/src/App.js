import React from 'react';
import styled from 'styled-components';
import Routes from './routes';

const AppWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Noto Sans TC', sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      <Routes/>
    </AppWrapper>
  );
}
export default App;
