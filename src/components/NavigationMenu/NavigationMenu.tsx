import { FC } from 'react';
import { User } from '../User/User';
import { Nav } from 'react-bootstrap';
import './NavigationMenu.scss';

export const NavigationMenu: FC = () => {
  return (
    <div className="navigationMenu">
      <User />

      <Nav variant="underline" defaultActiveKey="#" className="flex-column navBar">
        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link " href="#">
            ORDERS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-1">
            PRODUCTS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-2">
            GROUPS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-3">
            USERS
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <Nav.Link className="navBar__link" eventKey="link-4">
            SETTING
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
