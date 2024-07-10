import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <AppRouter />
      {/* <Header />
      <Login /> */}
    </div>
  );
};

export default App;
