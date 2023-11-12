import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppLayoutPage from './components/common/AppLayoutPage';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/Theme';

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayoutPage />
    </ThemeProvider>
  </div>
);

export default App;
