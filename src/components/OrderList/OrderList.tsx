import { Button } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import './OrderList.scss';
import { IOrder, Order } from '../Order/Order';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductListAndOrderList } from '../../store/api';
import { Outlet } from 'react-router-dom';

export const OrderList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orderList: IOrder[] = useSelector(
    (state: RootState) => state.dzenCode.orderListWithProduct
  );

  useEffect(() => {
    dispatch(fetchProductListAndOrderList());
  }, [dispatch]);

  return (
    <div className="orderList">
      <div className="orderList__header">
        <Button className="rounded-circle orderList__button btnAdd">+</Button>
        <p className="orderList__headerTitle">OrderList / {orderList.length}</p>
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
  );
};
