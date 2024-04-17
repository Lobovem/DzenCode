import { Button } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import { Order } from '../Order/Order';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchOrderList } from '../../store/api';
import { Outlet } from 'react-router-dom';
import { IOrder } from '../../types/types';
import './OrderList.scss';
import { useAppDispatch } from '../../store/appDispatch';

export const OrderList: FC = () => {
  const dispatch = useAppDispatch();
  const orderList: IOrder[] = useSelector((state: RootState) => state.dzenCode.orderList);

  console.log(orderList);

  useEffect(() => {
    dispatch(fetchOrderList());
  }, [dispatch]);

  //TODO add to loader
  //TODO check out styles to orderDetail component

  return (
    <>
      <div className="orderList animation">
        <div className="orderList__header">
          <Button className="rounded-circle orderList__button">+</Button>
          <p className="orderList__headerTitle">Orders / {orderList.length}</p>
        </div>

        <div className="orderList__wrap">
          <div className="orderList__list">
            {orderList?.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>

          <div className="orderList__orderDetail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
