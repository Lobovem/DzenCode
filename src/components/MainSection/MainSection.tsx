import { Col, Container, Row } from 'react-bootstrap';
import './MainSection.scss';
import { FC } from 'react';

export const MainSection: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>1 of 2</Col>
        <Col lg={10}>2 of 2</Col>
      </Row>
    </Container>
  );
};
