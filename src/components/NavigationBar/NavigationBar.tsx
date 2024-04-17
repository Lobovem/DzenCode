import { FC } from 'react';
import { User } from '../User/User';
import './NavigationBar.scss';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

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
