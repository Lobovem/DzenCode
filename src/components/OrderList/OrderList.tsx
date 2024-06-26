import { Button } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import { Order } from '../Order/Order';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchOrderList } from '../../store/api';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../store/appDispatch';
import './OrderList.scss';

export const OrderList: FC = () => {
  const dispatch = useAppDispatch();
  const orderList = useSelector((state: RootState) => state.dzenCode.orderList);
  const handleDetailOrder = useSelector(
    (state: RootState) => state.dzenCode.statusDetailOrder
  );

  const isLoading = useSelector((state: RootState) => state.dzenCode.isLoading);
  const errorOrderList = useSelector((state: RootState) => state.dzenCode.errorOrderList);

  useEffect(() => {
    dispatch(fetchOrderList());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorOrderList) {
    return <div>Error: {errorOrderList}</div>;
  }

  return (
    <div className="orderList animation">
      <div className="orderList__header">
        <Button className="rounded-circle orderList__button">+</Button>
        <p className="orderList__headerTitle">Orders / {orderList.length}</p>
      </div>

      <div className="orderList__wrap">
        <div
          className={
            handleDetailOrder ? 'orderList__list orderList__list_sm' : 'orderList__list'
          }
        >
          {orderList?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
};
