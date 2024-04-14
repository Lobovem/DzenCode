import { Col, Container, Row } from 'react-bootstrap';
import './Layout.scss';
import { FC } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container className="layoutMain">
        <Row>
          <Col lg={2} className="leftSide">
            <NavigationMenu />
          </Col>

          <Col lg={10} className="rightSide">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
