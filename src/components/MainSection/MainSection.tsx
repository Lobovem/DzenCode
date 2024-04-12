import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

export const MainSection: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>
          <NavigationMenu />
        </Col>
        <Col lg={10}>2 of 2</Col>
      </Row>
    </Container>
  );
};
