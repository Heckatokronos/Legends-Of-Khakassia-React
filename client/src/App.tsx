import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/ui'
import { Catalog, Main, Product, History, Cart, Company } from './pages';
import { CssBaseline, createTheme, useMediaQuery, ThemeProvider } from '@mui/material'

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/history" element={<History />} />
          <Route path="/company" element={<Company />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
