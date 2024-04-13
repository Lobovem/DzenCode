import { FC } from 'react';
import { CloseButton } from 'react-bootstrap';
import './BtnClose.scss';

export const BtnClose: FC = () => {
  return (
    <div className="btnClose">
      <CloseButton className="btnClose__close" />
    </div>
  );
};
