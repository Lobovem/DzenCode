import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import './NavigationMenu.scss';
import { useAppDispatch } from '../../store/appDispatch';
import { disableDetailOrder } from '../../store/slices';

export const NavigationMenu: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Nav variant="underline" defaultActiveKey="#" className="navigationMenu">
      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          HOME
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/orders"
          onClick={() => dispatch(disableDetailOrder())}
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          ORDERS
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          PRODUCTS
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/groups"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          GROUPS
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          USERS
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          SETTINGS
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};
