import { FC } from 'react';
import './Order.scss';
import { Button, Image } from 'react-bootstrap';
import iconList from '../../assets/iconList.png';
import iconTrush from '../../assets/iconTrush.png';

export const Order: FC = () => {
  return (
    <div className="order">
      <div className="order__wrap">
        <div className="order__titleWrap">
          <p className="order__title">
            Long long title name very long order long title name very long order
          </p>
        </div>

        <div className="order__countWrap">
          <Button variant="white" className="order__btn">
            <Image src={iconList} className="order__btnIcon" />
          </Button>

          <div className="order__countProductsWrap">
            <p className="order__countProducts">23</p>
            <p className="order__countProductsDesc">Products</p>
          </div>
        </div>

        <div className="order__dateWrap">
          <p className="order__dateShort">04 / 12</p>
          <p className="order__dateLarge">06/ Apr / 2024</p>
        </div>

        <div className="order__priceWrap">
          <p className="order__priceShort">2500 $</p>
          <p className="order__priceLarge">250 000 UAH</p>
        </div>

        <div className="order__btnTrushWrap">
          <Button variant="white" className="btnTrush">
            <Image src={iconTrush} className="btnTrush__icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
