import { Layout } from '../components/Layout/Layout';
import OrderDetail from '../components/OrderDetail/OrderDetail';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';
import { OrdersPage } from '../pages/OrdersPage';
import { ProductsPage } from '../pages/ProductsPage';

export const routes = [
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
];
