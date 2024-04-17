import { FC, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import iconList from '../../assets/icon/iconList.png';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { deleteOrder } from '../../store/api';
import {
  formatDateWithSlashNameMonthFull,
  formatDateWithSlashSmall,
} from '../../utils/dateFormats';
import iconArrow from '../../assets/icon/iconArrow.png';
import './Order.scss';
import { IOrder } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';

type ParamsType = {
  id: string;
};

interface IOrderProps {
  order: IOrder;
}

//TODO make popUp delete to order
export const Order: FC<IOrderProps> = ({ order }) => {
  const { id } = useParams<ParamsType>();

  const [priceUsd, setpriceUsd] = useState(0);
  const [priceUah, setPriceUah] = useState(0);

  const dispatch = useAppDispatch();

  const handleDeleteOrder = (): void => {
    dispatch(deleteOrder(order.id));
  };

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

  //TODO check out reduce
  useEffect(() => {
    reducePrice();
  }, []);

  return (
    <div className="order animation">
      <div className="order__wrap">
        {!isDetailOrder && (
          <div className="order__titleWrap">
            <Link to={`/orders/${order.id}`} className="order__title">
              {order.title}
            </Link>
          </div>
        )}

        <div className="order__countWrap">
          <Link to={`/orders/${order.id}/${order.title}`} className="order__btn">
            <Image src={iconList} className="order__btnIcon" />
          </Link>

          <div className="order__countProductsWrap">
            <p className="order__countProducts">{order.products.length}</p>
            <p className="order__countProductsDesc">Products</p>
          </div>
        </div>

        <div className="order__dateWrap">
          <p className="order__dateShort">{formatDateWithSlashSmall(order.date)}</p>
          <p className="order__dateLarge">
            {formatDateWithSlashNameMonthFull(order.date)}
          </p>
        </div>

        {!isDetailOrder && (
          <div className="order__priceWrap">
            <p className="order__priceShort">{priceUsd} $</p>
            <p className="order__priceLarge">{priceUah} UAH</p>
          </div>
        )}
        {!isDetailOrder && (
          <div className="order__btnTrushWrap">
            <BtnTrush onClick={handleDeleteOrder} />
          </div>
        )}

        {isDetailOrder && (
          <div className="order__iconActiveWrap">
            {id === order.id && (
              <Image className="order__iconActive animation" src={iconArrow} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
