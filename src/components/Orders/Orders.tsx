import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FC } from 'react';
import iconList from '../../assets/iconList.png';
import iconTrush from '../../assets/iconTrush.png';
import './Orders.scss';

export const Orders: FC = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <Button className="rounded-circle orders__button button">+</Button>
        <p className="orders__headerTitle">Orders / 25</p>
      </div>

      <Container fluid className="orders__listItem listItem">
        <Row className="align-items-center listItem__item">
          <Col md={5}>
            <p className="listItem__title">Long long title name very long order</p>
          </Col>
          <Col md={2} className="listItem__count">
            <Button variant="white" className="listItem__iconListWrap">
              <Image src={iconList} className="listItem__iconList" />
            </Button>

            <div>
              <p className="listItem__countProducts">23</p>
              <p className="listItem__countProductsDesc">Products</p>
            </div>
          </Col>

          <Col md={2} className="listItem__date">
            <p className="listItem__dateShort">04 / 12</p>
            <p className="listItem__dateLarge">06/ Apr / 2024</p>
          </Col>

          <Col md={2}>
            <p className="listItem__priceShort">2500 $</p>
            <p className="listItem__priceLarge">250 000 UAH</p>
          </Col>

          <Col md={1}>
            <Button variant="white">
              <Image src={iconTrush} className="listItem__iconTrush" />
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center listItem__item">
          <Col md={5}>
            <p className="listItem__title">Длинное предлинное длиннючее название order</p>
          </Col>
          <Col md={2} className="listItem__count">
            <Button variant="white" className="listItem__iconListWrap">
              <Image src={iconList} className="listItem__iconList" />
            </Button>

            <div>
              <p className="listItem__countProducts">23</p>
              <p className="listItem__countProductsDesc">Products</p>
            </div>
          </Col>

          <Col md={2} className="listItem__date">
            <p className="listItem__dateShort">04 / 12</p>
            <p className="listItem__dateLarge">06/ Apr / 2024</p>
          </Col>

          <Col md={2}>
            <p className="listItem__priceShort">2500 $</p>
            <p className="listItem__priceLarge">250 000 UAH</p>
          </Col>

          <Col md={1}>
            <Button variant="white">
              <Image src={iconTrush} className="listItem__iconTrush" />
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center listItem__item">
          <Col md={5}>
            <p className="listItem__title">Длинное предлинное длиннючее название order</p>
          </Col>
          <Col md={2} className="listItem__count">
            <Button variant="white" className="listItem__iconListWrap">
              <Image src={iconList} className="listItem__iconList" />
            </Button>

            <div>
              <p className="listItem__countProducts">23</p>
              <p className="listItem__countProductsDesc">Products</p>
            </div>
          </Col>

          <Col md={2} className="listItem__date">
            <p className="listItem__dateShort">04 / 12</p>
            <p className="listItem__dateLarge">06/ Apr / 2024</p>
          </Col>

          <Col md={2}>
            <p className="listItem__priceShort">2500 $</p>
            <p className="listItem__priceLarge">250 000 UAH</p>
          </Col>

          <Col md={1}>
            <Button variant="white">
              <Image src={iconTrush} className="listItem__iconTrush" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
