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
          <NavLink to="/" className="navBar__link" activeClassName="active">
            HOME
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink to="/orderList" className="navBar__link" activeClassName="active">
            ORDERS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink to="/productList" className="navBar__link" activeClassName="active">
            PRODUCTS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink to="/groups" className="navBar__link" activeClassName="active">
            GROUPS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink to="/users" className="navBar__link" activeClassName="active">
            USERS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink to="/settings" className="navBar__link" activeClassName="active">
            SETTINGS
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};
