import { FC } from 'react';
import { User } from '../User/User';
import { Nav } from 'react-bootstrap';
import './NavigationMenu.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { isDetailOrder } from '../../store/slices';

export const NavigationMenu: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="navigationMenu">
      <User />

      <Nav variant="underline" defaultActiveKey="#" className="flex-column navBar">
        <Nav.Item className="navBar__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            HOME
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink
            to="/orders" //TODO check out it
            /*функция dispatch нужна, чтобы когда выбран роутер orders скрывался компонент detailOrder и 
            вновь были показаны все поля order компонента, потому что при открытии dateilOrder 
            скрываются некоторые поля order component*/
            onClick={() => dispatch(isDetailOrder())}
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            ORDERS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            PRODUCTS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink
            to="/groups"
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            GROUPS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            USERS
          </NavLink>
        </Nav.Item>

        <Nav.Item className="navBar__item">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? 'navBar__link navBar__link_active' : 'navBar__link'
            }
          >
            SETTINGS
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};
