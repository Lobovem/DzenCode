import { Form } from 'react-bootstrap';
import { FC } from 'react';
import { dataSelectChange } from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import './Select.scss';

export const SelectType: FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedType = e.target.value;
    dispatch(dataSelectChange({ type: selectedType }));
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
