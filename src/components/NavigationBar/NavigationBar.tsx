import { FC } from 'react';
import { User } from '../User/User';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import './NavigationBar.scss';

export const NavigationBar: FC = () => {
  return (
    <div className="navigationBar">
      <div className="navigationBar__user">
        <User />
      </div>

      <div className="navigationBar__menu">
        <NavigationMenu />
      </div>
    </div>
  );
};
