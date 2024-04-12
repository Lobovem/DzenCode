import { Form } from 'react-bootstrap';
import './Search.scss';

export const Search = () => {
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
