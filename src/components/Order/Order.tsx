import { FC } from 'react';
import { Image } from 'react-bootstrap';
import iconList from '../../assets/icon/iconList.png';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import {
  formatDateWithSlashNameMonthFull,
  formatDateWithSlashSmall,
} from '../../utils/dateFormats';
import iconArrow from '../../assets/icon/iconArrow.png';
import './Order.scss';

import { useAppDispatch } from '../../store/appDispatch';
import { IOrder } from '../../types/types';
import { PopUp } from '../PopUp/PopUp';
import { addDeleteOrder, handleDelete } from '../../store/slices';

type ParamsType = {
  id: string;
};

interface IOrderProps {
  order: IOrder;
}

export const Order: FC<IOrderProps> = ({ order }) => {
  const { id } = useParams<ParamsType>();
  const dispatch = useAppDispatch();
  const isDelete = useSelector((state: RootState) => state.dzenCode.isDelete);
  const delOrder = useSelector((state: RootState) => state.dzenCode.deleteOrder);

  const handleDeleteOrder = (): void => {
    dispatch(addDeleteOrder(order));
    dispatch(handleDelete());
  };

  const handleDetailOrder = useSelector(
    (state: RootState) => state.dzenCode.statusDetailOrder
  );

  return (
    <>
      <div className="order animation">
        <div className="order__wrap">
          {!handleDetailOrder && (
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
              <p className="order__countProducts">{order.productCount}</p>
              <p className="order__countProductsDesc">Products</p>
            </div>
          </div>

          <div className="order__dateWrap">
            <p className="order__dateShort">{formatDateWithSlashSmall(order.date)}</p>
            <p className="order__dateLarge">
              {formatDateWithSlashNameMonthFull(order.date)}
            </p>
          </div>

          {!handleDetailOrder && (
            <div className="order__priceWrap">
              {order.totalPrice.map((price) => (
                <p
                  key={price.symbol}
                  className={price.isDefault ? 'order__priceLarge' : 'order__priceShort'}
                >{`${price.value} ${price.symbol}`}</p>
              ))}
            </div>
          )}
          {!handleDetailOrder && (
            <div className="order__btnTrushWrap">
              <BtnTrush onClick={handleDeleteOrder} />
            </div>
          )}

          {handleDetailOrder && (
            <div
              className={
                id === order.id
                  ? 'order__iconWrap order__iconWrap_active'
                  : 'order__iconWrap'
              }
            >
              {id === order.id && (
                <Image className="order__iconArrow animation" src={iconArrow} />
              )}
            </div>
          )}
        </div>
      </div>

      {isDelete && <PopUp deleteItem={delOrder} />}
    </>
  );
};
