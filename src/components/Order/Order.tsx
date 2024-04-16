import { FC, useEffect, useState } from 'react';
import './Order.scss';
import { Button, Image } from 'react-bootstrap';
import iconList from '../../assets/iconList.png';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { IProduct } from '../Product/Product';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export interface IOrder {
  id: string;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
}

interface IOrderProps {
  order: IOrder;
}

export const Order: FC<IOrderProps> = ({ order }) => {
  const [priceUsd, setpriceUsd] = useState(0);
  const [priceUah, setPriceUah] = useState(0);

  const isDetailOrder: boolean = useSelector(
    (state: RootState) => state.dzenCode.isDetailOrder
  );

  const reducePrice = (): void => {
    const priceFirst: number = order.products.reduce(
      (acc, item) => acc + item.price[0].value,
      0
    ); //TODO review method reduce
    const priceSec: number = order.products.reduce(
      (acc, item) => acc + item.price[1].value,
      0
    );
    setpriceUsd(priceFirst);
    setPriceUah(priceSec);
  };

  useEffect(() => {
    reducePrice();
  }, []);

  return (
    <div className="order">
      <div className="order__wrap">
        {!isDetailOrder && (
          <div className="order__titleWrap">
            <Link to={`/orders/${order.id}`} className="order__title">
              {order.title}
            </Link>
          </div>
        )}

        <div className="order__countWrap">
          <Link to={`/orders/${order.id}`} className="order__btn">
            <Image src={iconList} className="order__btnIcon" />
          </Link>

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

        {!isDetailOrder && (
          <div className="order__priceWrap">
            <p className="order__priceShort">{priceUsd} $</p>
            <p className="order__priceLarge">{priceUah} UAH</p>
          </div>
        )}
        {!isDetailOrder && (
          <div className="order__btnTrushWrap">
            <BtnTrush />
          </div>
        )}
      </div>
    </div>
  );
};
