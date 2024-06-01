import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/app/store';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

export type CustomContext = {
  queryClient: QueryClient;
};

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient } as CustomContext,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  type Register = {
    router: typeof router;
  };
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// biome-ignore lint: noNonNullAssertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
