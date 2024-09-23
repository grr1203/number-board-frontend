import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      { path: 'edit', element: <Edit /> },
    ],
  },
]);

export { router };
