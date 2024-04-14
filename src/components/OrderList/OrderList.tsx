import { Button } from 'react-bootstrap';
import { FC } from 'react';
import './OrderList.scss';
import { Order } from '../Order/Order';
import { OrderDetail } from '../OrderDetail/OrderDetail';

export const OrderList: FC = () => {
  return (
    <div className="orderList">
      <div className="orderList__header">
        <Button className="rounded-circle orderList__button btnAdd">+</Button>
        <p className="orderList__headerTitle">OrderList / 25</p>
      </div>

      <div className="orderList__wrap">
        <div className="orderList__list">
          <Order />
          <Order />
          <Order />
        </div>
        {/* <OrderDetail /> */}
      </div>
    </div>
  );
};
