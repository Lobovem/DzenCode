// import reactLogo from './assets/react.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { PopUp } from './components/PopUp/PopUp';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { OrdersPage } from './pages/OrdersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/productList',
    element: <ProductsPage />,
  },

  {
    path: '/orderList',
    element: <OrdersPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <RouterProvider router={router} />
      </MainSection>
      {/* <PopUp /> */}
    </>
  );
}

export default App;
