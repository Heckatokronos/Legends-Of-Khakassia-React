import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/ui'
import { Catalog, Main, Product, History, Cart, Company, Delivery } from './pages';
import { CssBaseline, createTheme, useMediaQuery, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system';

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
        <Container maxWidth="lg">
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/product" element={<Product />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/history" element={<History />} />
            <Route path="/company" element={<Company />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <CssBaseline />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
