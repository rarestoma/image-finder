import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import ImagePage from './pages/ImagePage';
import CardPage from './pages/CardPage';

const router =  createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/image', element: <ImagePage />},
  {path: '/card', element: <CardPage />},
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
