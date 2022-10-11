import logo from './logo.svg';
import './App.css';
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {path: '/',
  element: <Main></Main>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
    {
      path: '/',
      element: <Topics></Topics>
    },
    {
      path: '/topics',
      element: <Topics></Topics>
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    }
  ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
