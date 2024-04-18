import { Form } from 'react-bootstrap';
import { FC } from 'react';
import { dataSelectChange } from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import './Select.scss';

export const SelectSpecification: FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedSpecification = e.target.value;
    dispatch(dataSelectChange({ specification: selectedSpecification }));
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
        <option value="Specification-1">Specification-1</option>
        <option value="Specification-2">Specification-2</option>
      </Form.Select>
    </div>
  );
};
