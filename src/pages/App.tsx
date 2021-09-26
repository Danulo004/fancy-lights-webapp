import React from 'react';
import styled from 'styled-components';

import '../App.css';

const Text = styled.p`
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>
          Edit
          <code> src/App.tsx </code>
          and save to reload.
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
