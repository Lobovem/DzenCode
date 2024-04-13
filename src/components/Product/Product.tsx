import { FC } from 'react';
import './Product.scss';
import { Button, Image } from 'react-bootstrap';
import imgMonitor from '../../assets/monitor.png';
import iconTrush from '../../assets/iconTrush.png';

export const Product: FC = () => {
  return (
    <div className="product">
      <div className="product__status product__status_sm"></div>
      <Image className="product__img" src={imgMonitor} />

      <div className="product__titleWrap">
        <p className="product__title">Samsung 49-inch Odyssey G9 Curved Gaming Monitor</p>
        <p className="product__titleDesc">SN- 9876543210</p>
      </div>

      <p className="product__status">Free</p>

      <div className="product__dateWrap">
        <div>
          <p className="product__dateTitle">06 / 04 / 2017</p>
        </div>
        <div>
          <p className="product__dateTitle">07 / 05 / 2019</p>
        </div>
      </div>

      <p>new</p>
      {/* <p>boo</p> */}

      <div className="product__dateWrap">
        <p className="product__dateTitle">
          <span>2500 $</span>
        </p>
        <p className="product__dateTitle">250 000 UAH</p>
      </div>

      <p className="product__title product__title_lg">
        Long long title name very long group
      </p>
      <p className="product__title product__title_lg"> Volkov Vladimir</p>

      <p className="product__title product__title_lg">
        Long name very long very long order
      </p>

      <div className="product__dateWrap">
        <p className="product__dateTitle product__dateTitle_center">
          <span>06 / 12</span>
        </p>
        <p className="product__dateTitle">07 / Apr / 2019</p>
      </div>

      <div className="product__btnTrushWrap">
        <Button variant="white" className="btnTrush">
          <Image src={iconTrush} className="btnTrush__icon" />
        </Button>
      </div>
    </div>
  );
};
