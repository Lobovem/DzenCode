import { Button } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import { IOrder, Order } from '../Order/Order';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderList } from '../../store/api';
import { Outlet } from 'react-router-dom';
import './OrderList.scss';

export const OrderList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orderList: IOrder[] = useSelector((state: RootState) => state.dzenCode.orderList);

  useEffect(() => {
    dispatch(fetchOrderList());
  }, [dispatch]);

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
          <Outlet />
        </div>
      </div>
    </>
  );
};
