import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Time } from '../Time/Time';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import './Header.scss';

export const Header: FC = () => {
  return (
    <div className="layout">
      <Container>
        <Row className="header">
          <Col xl={2} className="header__logo">
            <Logo />
          </Col>

          <Col xl={8} className="header__search">
            <Search />
          </Col>

          <Col xl={2} className="header__time">
            <Time />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
