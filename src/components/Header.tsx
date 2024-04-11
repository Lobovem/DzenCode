import { FC } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Header.scss';
import logo from '../assets/logo.png';

export const Header: FC = () => {
  return (
    <div className="layout">
      <Container>
        <Row className="header">
          <Col xxl={2} className="header__logo logo">
            <div className="logo__imgWrap">
              <img className="logo__img" src={logo} />
            </div>
            <p className="logo__title">INVENTORY</p>
          </Col>

          <Col xxl={8} className="header__search search">
            <Form.Control
              className="search__input"
              placeholder="Поиск"
              type="text"
              id="search"
              aria-describedby="passwordHelpBlock"
            />
          </Col>

          <Col xxl={2} className="header__time time">
            <p className="time__day">Суббота</p>
            <div className="time__wrapDate">
              <p className="time__date">11 апр 2024</p>
              <div className="time__wrapIcon">
                <img
                  className="time__icon"
                  src="https://catherineasquithgallery.com/uploads/posts/2023-02/1676622343_catherineasquithgallery-com-p-chasi-na-zelenom-fone-2.png"
                />
                <p className="time__clock">17:20</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
