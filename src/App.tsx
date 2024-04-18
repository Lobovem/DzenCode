// import reactLogo from './assets/react.svg';
import { RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import { router } from './router/router';
import './App.scss';
import { ConfirmationProvider } from './ConfirmationProvider';

export const App: FC = () => {
  return (
    <ConfirmationProvider>
      <RouterProvider router={router} />;
    </ConfirmationProvider>
  );
};
