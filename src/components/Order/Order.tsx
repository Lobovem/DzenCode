import { FC } from 'react';
import './Order.scss';
import { Button, Image } from 'react-bootstrap';
import iconList from '../../assets/iconList.png';
import { BtnTrush } from '../BtnTrush/BtnTrush';

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  products: { id: number }[];
}

interface IOrderProps {
  order: IOrder;
}

export const Order: FC<IOrderProps> = ({ order }) => {
  console.log('order=====>', order);

  return (
    <div className="order">
      <div className="order__wrap">
        <div className="order__titleWrap">
          <p className="order__title">{order.title}</p>
        </div>

        <div className="order__countWrap">
          <Button variant="white" className="order__btn">
            <Image src={iconList} className="order__btnIcon" />
          </Button>

          <div className="order__countProductsWrap">
            <p className="order__countProducts">{order.products.length}</p>
            <p className="order__countProductsDesc">Products</p>
          </div>
        </div>

        <div className="order__dateWrap">
          {/* <p className="order__dateShort">04 / 12</p>
          <p className="order__dateLarge">06/ Apr / 2024</p> */}
          <p className="order__dateShort">{order.date}</p>
          <p className="order__dateLarge">{order.date}</p>
        </div>

        <div className="order__priceWrap">
          <p className="order__priceShort">2500 $</p>
          <p className="order__priceLarge">250 000 UAH</p>
        </div>

        <div className="order__btnTrushWrap">
          <BtnTrush />
        </div>
      </div>
    </div>
  );
};
