import { Form } from 'react-bootstrap';
import { FC } from 'react';
import './Select.scss';
import { useDispatch } from 'react-redux';
import { fetchproductListByType } from '../../store/api';
import { AppDispatch } from '../../store/store';

export const SelectType: FC<{ title: string }> = ({ title }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const type = e.target.value;
    console.log(type);

    dispatch(fetchproductListByType(type));
  };

  return (
    <div className="select">
      <p className="select__title">{title}:</p>
      <Form.Select
        onChange={handleChange}
        aria-label="Default select example"
        className="select__body"
      >
        <option value="">Open this select menu</option>
        <option value="Monitors">Monitors</option>
        <option value="Plazma">Plazma</option>
      </Form.Select>
    </div>
  );
};
