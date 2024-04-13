import { FC } from 'react';
import './Products.scss';
import imgMonitor from '../../assets/monitor.png';
import iconTrush from '../../assets/iconTrush.png';
import { Button, Form, Image } from 'react-bootstrap';

export const Products: FC = () => {
  return (
    <div className="products">
      <div className="products__header">
        <p className="products__headerTitle">Products / 25</p>
        <p className="products__titleSelect">Type:</p>
        <Form.Select aria-label="Default select example" className="products__select">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <p className="products__titleSelect">Specification:</p>

        <Form.Select aria-label="Default select example" className="products__select">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      <div className="products__item item">
        <div className="item__status item__status_sm"></div>
        <Image className="item__img" src={imgMonitor} />

        <div className="item__titleWrap">
          <p className="item__title">
            Samsung 49-inch Odyssey G9 Curved Gaming Monitor with QLED
          </p>
          <p className="item__titleDesc">SN- 9876543210</p>
        </div>

        <p className="item__status">Free</p>

        <div className="item__date">
          <p className="item__dateTitle">
            <span>с </span>06 / 04 / 2017
          </p>
          <p className="item__dateTitle">
            <span>по </span>07 / 05 / 2019
          </p>
        </div>

        <p>new</p>
        {/* <p>boo</p> */}

        <div className="item__date">
          <p className="item__dateTitle">
            <span>2500 $</span>
          </p>
          <p className="item__dateTitle">250 000 UAH</p>
        </div>

        <p className="item__title item__title_lg">Long long title name very long group</p>
        <p className="item__title item__title_lg"> Volkov Vladimir</p>

        <p className="item__title item__title_lg">Long name very long very long order</p>

        <div className="item__date">
          <p className="item__dateTitle">
            <span>06 / 12</span>
          </p>
          <p className="item__dateTitle">07 / Apr / 2019</p>
        </div>

        <div className="item__iconTrush iconTrush">
          <Button variant="white">
            <Image src={iconTrush} className="iconTrush__icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
