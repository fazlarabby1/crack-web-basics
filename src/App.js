import logo from './logo.svg';
import './App.css';
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quiz from './components/Quiz/Quiz';

const router = createBrowserRouter([
  {path: '/',
  element: <Main></Main>,
  loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
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
    },
    {
      path: '/topics/quiz/:id',
      loader: async({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element: <Quiz></Quiz>
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
