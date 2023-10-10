import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
