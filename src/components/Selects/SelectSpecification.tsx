import { Form } from 'react-bootstrap';
import { FC } from 'react';
import './Select.scss';

export const SelectSpecification: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="select">
      <p className="select__title">{title}:</p>
      <Form.Select aria-label="Default select example" className="select__body">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};
