import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import AdminPage from '../pages/AdminPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
