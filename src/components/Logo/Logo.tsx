import { FC } from 'react';
import logo from '../../assets/logo.png';
import './Logo.scss';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <div className="logo__imgWrap">
        <img className="logo__img" src={logo} />
      </div>
      <p className="logo__title">INVENTORY</p>
    </div>
  );
};
