import { Form } from 'react-bootstrap';
import { FC } from 'react';
import './Search.scss';

export const Search: FC = () => {
  return (
    <div className="search">
      <Form.Control
        className="search__input"
        placeholder="Поиск"
        type="text"
        id="search"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
};
