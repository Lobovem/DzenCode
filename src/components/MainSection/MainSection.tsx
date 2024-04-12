import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC } from 'react';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

export const MainSection: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={1} className="leftSide">
          <NavigationMenu />
        </Col>
        <Col lg={11}>2 of 2</Col>
      </Row>
    </Container>
  );
};
