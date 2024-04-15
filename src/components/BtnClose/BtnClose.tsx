import { FC, MouseEventHandler } from 'react';
import { CloseButton } from 'react-bootstrap';
import './BtnClose.scss';


interface BtnCloseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const BtnClose: FC<BtnCloseProps> = ({ onClick }) => {
  return (

      <div className="btnClose">
        <CloseButton className="btnClose__close" onClick={onClick} />
      </div>
   
  );
};
