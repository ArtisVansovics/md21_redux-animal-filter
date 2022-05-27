import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Page404 from './Pages/404/Page404';
import HomePage from './Pages/Home/HomePage';
import TranslationsPage from './Pages/Translations/TranslationsPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="/animals"
        element={<HomePage />}
      />
      <Route
        path="/animals"
        element={<HomePage />}
      />
      <Route
        path="/translations"
        element={<TranslationsPage />}
      />
      <Route
        path="404"
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </Router>
);

export default App;
