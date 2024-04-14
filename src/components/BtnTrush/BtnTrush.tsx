import { FC } from 'react';
import iconTrush from '../../assets/iconTrush.png';
import { Button, Image } from 'react-bootstrap';
import './BtnTrush.scss';

export const BtnTrush: FC = () => {
  return (
    <Button variant="white" className="btnTrush">
      <Image src={iconTrush} className="btnTrush__icon" />
    </Button>
  );
};
