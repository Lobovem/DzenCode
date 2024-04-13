import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC, HTMLAttributes } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Orders } from '../Orders/Orders';
import { Products } from '../../pages/ProductsPage/ProductsPage';

export const MainSection: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Container className="layoutMain">
      <Row>
        <Col lg={2} className="leftSide">
          <NavigationMenu />
        </Col>
        <Col lg={10} className="rightSide">
          {/* <Orders /> */}
          {/* <Products /> */}
          {children}
        </Col>
      </Row>
    </Container>
  );
};
