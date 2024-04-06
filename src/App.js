// App.js
import React from 'react';
import { MovieProvider } from './contexts/MovieContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <MovieProvider>
      <AppNavigator />
    </MovieProvider>
  );
};

export default App;
