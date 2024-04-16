import { FC } from 'react';
import iconTrush from '../../assets/iconTrush.png';
import { Button, Image } from 'react-bootstrap';
import './BtnTrush.scss';

interface IBtnTrushProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BtnTrush: FC<IBtnTrushProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="white" className="btnTrush">
      <Image src={iconTrush} className="btnTrush__icon" />
    </Button>
  );
};
