import React, { useState, useEffect } from 'react';
import { formatDateWithDot } from '../../utils/dateFormats';
import './TopMenu.scss';

export const TopMenu: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //TODO move functions

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return date.toLocaleTimeString('en-US', options);
  };

  const formatDay = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  };

  return (
    <div className="time">
      <p className="time__day">{formatDay(currentDateTime)}</p>
      <div className="time__wrapDate">
        <p className="time__date">{formatDateWithDot(currentDateTime)}</p>
        <div className="time__wrapIcon">
          <img
            className="time__icon"
            src="https://catherineasquithgallery.com/uploads/posts/2023-02/1676622343_catherineasquithgallery-com-p-chasi-na-zelenom-fone-2.png"
          />
          <p className="time__clock">{formatTime(currentDateTime)}</p>
        </div>
      </div>
    </div>
  );
};
