import Image from 'react-bootstrap/Image';
import userPhoto from '../../assets/img/userPhoto.png';
import { FC } from 'react';
import { NavLink } from 'react-bootstrap';
import './User.scss';

export const User: FC = () => {
  return (
    <div className="user">
      <Image className="user__photo" src={userPhoto} roundedCircle />
      <NavLink className="user__settingIconWrap" href="#">
        <Image
          src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
          className="user__settingIcon"
          roundedCircle
        />
      </NavLink>
    </div>
  );
};
