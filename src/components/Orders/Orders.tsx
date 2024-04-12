import { Button, ListGroup } from 'react-bootstrap';
import { FC } from 'react';
import './Orders.scss';

export const Orders: FC = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <Button className="rounded-circle orders__button button">+</Button>
        <p className="orders__headerTitle">Orders / 25</p>
      </div>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
