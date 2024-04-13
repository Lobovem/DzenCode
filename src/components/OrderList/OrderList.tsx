import { BtnClose } from '../BtnClose/BtnClose';
import imgMonitor from '../../assets/monitor.png';
import { Button } from 'react-bootstrap';
import { FC } from 'react';
import './OrderList.scss';
import { Order } from '../Order/Order';

export const OrderList: FC = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <Button className="rounded-circle orders__button btnAdd">+</Button>
        <p className="orders__headerTitle">Orders / 25</p>
      </div>

      <div className="orders__listItem">
        <Order />

        {/* <div className="orders__detailWrap detailOrder">
          <BtnClose>

          <p className="detailOrder__title">
            Long long title name very long order long title name very long order
          </p>

          <div className="detailOrder__buttonWrap">
            <Button className="rounded-circle button">+</Button>
            <p>Add product</p>
          </div>

          <div className="detailOrder__listItem item">
            <div className="item__status item__status_sm"></div>
            <Image className="item__img" src={imgMonitor} />

            <div className="item__titleWrap">
              <p className="item__title">
                Samsung 49-inch Odyssey G9 Curved Gaming Monitor with QLED
              </p>
              <p className="item__titleDesc">SN- 9876543210</p>
            </div>

            <p className="item__status">Free</p>

            <div className="item__iconTrush iconTrush">
              <Button variant="white">
                <Image src={iconTrush} className="iconTrush__icon" />
              </Button>
            </div>
          </div>

          <div className="detailOrder__listItem item">
            <div className="item__status item__status_sm"></div>
            <Image className="item__img" src={imgMonitor} />

            <div className="item__titleWrap">
              <p className="item__title">
                Samsung 49-inch Odyssey G9 Curved Gaming Monitor with QLED
              </p>
              <p className="item__titleDesc">SN- 9876543210</p>
            </div>

            <p className="item__status">Free</p>

            <div className="item__iconTrush iconTrush">
              <Button variant="white">
                <Image src={iconTrush} className="iconTrush__icon" />
              </Button>
            </div>
          </div>

          <div className="detailOrder__listItem item">
            <div className="item__status item__status_sm"></div>
            <Image className="item__img" src={imgMonitor} />

            <div className="item__titleWrap">
              <p className="item__title">
                Samsung 49-inch Odyssey G9 Curved Gaming Monitor with QLED
              </p>
              <p className="item__titleDesc">SN- 9876543210</p>
            </div>

            <p className="item__status">Free</p>

            <div className="item__iconTrush iconTrush">
              <Button variant="white">
                <Image src={iconTrush} className="iconTrush__icon" />
              </Button>
            </div>
          </div>
        </div> */}

        {/* <Row className="align-items-center listItem__item">
          <Col md={5} className="listItem__titleWrap">
            <p className="listItem__title">
              Long long title name very long order long title name very long order{' '}
            </p>
          </Col>

          <Col md={2} className="listItem__countWrap">
            <Button variant="white" className="listItem__iconListWrap">
              <Image src={iconList} className="listItem__iconList" />
            </Button>

            <div>
              <p className="listItem__countProducts">23</p>
              <p className="listItem__countProductsDesc">Products</p>
            </div>
          </Col>

          <Col md={2} className="listItem__dateWrap">
            <p className="listItem__dateShort">04 / 12</p>
            <p className="listItem__dateLarge">06/ Apr / 2024</p>
          </Col>

          <Col md={2} className="listItem__priceWrap">
            <p className="listItem__priceShort">2500 $</p>
            <p className="listItem__priceLarge">250 000 UAH</p>
          </Col>

          <Col md={1} className="listItem__iconTrushWrap">
            <Button variant="white">
              <Image src={iconTrush} className="listItem__iconTrush" />
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center listItem__item">
          <Col md={5} className="listItem__titleWrap">
            <p className="listItem__title">
              Long long title name very long order long title name very long order{' '}
            </p>
          </Col>

          <Col md={2} className="listItem__countWrap">
            <Button variant="white" className="listItem__iconListWrap">
              <Image src={iconList} className="listItem__iconList" />
            </Button>

            <div>
              <p className="listItem__countProducts">23</p>
              <p className="listItem__countProductsDesc">Products</p>
            </div>
          </Col>

          <Col md={2} className="listItem__dateWrap">
            <p className="listItem__dateShort">04 / 12</p>
            <p className="listItem__dateLarge">06/ Apr / 2024</p>
          </Col>

          <Col md={2} className="listItem__priceWrap">
            <p className="listItem__priceShort">2500 $</p>
            <p className="listItem__priceLarge">250 000 UAH</p>
          </Col>

          <Col md={1} className="listItem__iconTrushWrap">
            <Button variant="white">
              <Image src={iconTrush} className="listItem__iconTrush" />
            </Button>
          </Col>
        </Row>  */}
      </div>
    </div>
  );
};
