import Image from 'react-bootstrap/Image';
import userPhoto from '../../assets/userPhoto.png';
import './User.scss';

export const User = () => {
  return (
    <div className="user">
      <Image className="user__photo" src={userPhoto} roundedCircle />
      <div className="user__settingIconWrap">
        <Image
          src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
          className="user__settingIcon"
          roundedCircle
        />
      </div>
    </div>
  );
};
