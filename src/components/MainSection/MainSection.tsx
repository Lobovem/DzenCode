import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Orders } from '../Orders/Orders';

export const MainSection: FC = () => {
  return (
    <Container className="layoutMain">
      <Row>
        <Col lg={1} className="leftSide">
          <NavigationMenu />
        </Col>
        <Col lg={11}>
          <Orders />
        </Col>
      </Row>
    </Container>
  );
};
