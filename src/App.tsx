// import reactLogo from './assets/react.svg';
import { RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import { router } from './router/router';
import './App.scss';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
