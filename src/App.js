import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PostListPage />} path="/@:username" exact />
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PostPage />} path="/register" />
        <Route element={<WritePage />} path="/write" />
        <Route element={<RegisterPage />} path="/@username/:PostId" />
      </Routes>
    </Router>
  );
}
export default App;
