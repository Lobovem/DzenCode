import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Layout.scss';

export const Layout: FC = () => {
  const isDelete: boolean = useSelector((state: RootState) => state.dzenCode.isDelete);
  return (
    <>
      <Header />
      <main className="main">
        <Container className="layoutMain">
          <Row>
            <Col lg={2} className="leftSide">
              <NavigationMenu />
            </Col>

            <Col lg={10} className={isDelete ? 'rightSide isDelete' : 'rightSide'}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
