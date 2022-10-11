import logo from './logo.svg';
import './App.css';
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './components/Topics/Topics';

const router = createBrowserRouter([
  {path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Topics></Topics>
    },
    {
      path: '/topics',
      element: <Topics></Topics>
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
