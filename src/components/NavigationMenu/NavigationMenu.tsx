import { FC } from 'react';
import { User } from '../User/User';
import { Nav } from 'react-bootstrap';
import './NavigationMenu.scss';
import { NavLink } from 'react-router-dom';

export const NavigationMenu: FC = () => {
  return (
    <div className="navigationMenu">
      <User />

      <Nav variant="underline" defaultActiveKey="#" className="flex-column navBar">
        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link ">HOME</Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link " href="/productList" eventKey="link-1">
            ORDERS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" href="/orderList" eventKey="link-2">
            PRODUCTS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-3">
            GROUPS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-4">
            USERS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-5">
            SETTING
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
