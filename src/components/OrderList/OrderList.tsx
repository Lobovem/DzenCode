import { Button } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import './OrderList.scss';
import { Order } from '../Order/Order';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderList } from '../../store/api/api';

export const OrderList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orderList = useSelector((state: RootState) => state.dzenCode.orderList);

  useEffect(() => {
    dispatch(fetchOrderList());
  }, []);

  console.log('orderList', orderList);

  return (
    <div className="orderList">
      <div className="orderList__header">
        <Button className="rounded-circle orderList__button btnAdd">+</Button>
        <p className="orderList__headerTitle">OrderList / 25</p>
      </div>

      <div className="orderList__wrap">
        <div className="orderList__list">
          {orderList.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
        {/* <OrderDetail /> */}
      </div>
    </div>
  );
};
