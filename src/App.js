// @flow

import React from 'react';
import styled, { css } from 'styled-components';

function App() {
  return (
    <div className="App">
        <Red><BlueOrGreen test="hi">Test</BlueOrGreen></Red>
    </div>
  );
}

export const Red = styled.div`
  border: 1px solid red;
`;

const BlueOrGreen = styled.span`
  border: 1px solid blue;

	${props =>
    !!props.green &&
		css`
      border-color: green;
		`};
`;


export default App;
