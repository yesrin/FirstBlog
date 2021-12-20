import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} />
      <Route component={LoginPage} path="/login" />
      <Route component={PostPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={RegisterPage} path="/@username/:PostId" />
    </>
  );
}
export default App;
