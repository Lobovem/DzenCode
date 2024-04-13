import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC, HTMLAttributes } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

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
