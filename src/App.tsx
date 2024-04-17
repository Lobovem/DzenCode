// import reactLogo from './assets/react.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { ErrorPage } from './pages/ErrorPage';
import { ProductsPage } from './pages/ProductsPage';
import { OrdersPage } from './pages/OrdersPage';
import { FC } from 'react';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { OrderDetail } from './components/OrderDetail/OrderDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: '/products',
        element: <ProductsPage />,
      },

      {
        path: '/orders',
        element: <OrdersPage />,
        children: [
          {
            path: '/orders/:id/:title',
            element: <OrderDetail />,
          },
        ],
      },
    ],
  },
]);

export const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
