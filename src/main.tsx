import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/app/store';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
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
  interface Register {
    router: typeof router;
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

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
        <ApolloProvider client={client}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
