import { FC } from 'react';
import logo from '../../assets/img/logo.png';
import './Logo.scss';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <div className="logo__imgWrap">
        <img className="logo__img" src={logo} />
      </div>
      <h1 className="logo__title">INVENTORY</h1>
    </div>
  );
};
