import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './Layout.scss';
import { PopUp } from '../PopUp/PopUp';

export const Layout: FC = () => {
  const isDelete = useSelector((state: RootState) => state.dzenCode.isDelete);
  const handleOpenModal = () => document.body.classList.add('modalActive');
  const handleCloseModal = () => document.body.classList.remove('modalActive');

  if (isDelete) {
    handleOpenModal();
  } else {
    handleCloseModal();
  }

  return (
    <>
      <Header />
      <main className="main">
        <Container className="layoutMain">
          <Row>
            <Col lg={2} className="leftSide">
              <NavigationBar />
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
