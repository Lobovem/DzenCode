import { Form } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchproductListBySelect } from '../../store/api';
import { dataSelectChange } from '../../store/slices';
import './Select.scss';
import { useAppDispatch } from '../../store/appDispatch';

export const SelectSpecification: FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();
  const dataSelect = useSelector((state: RootState) => state.dzenCode.dataSelect);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedType = e.target.value;
    dispatch(dataSelectChange({ specification: selectedType }));
  };

  useEffect(() => {
    dispatch(fetchproductListBySelect(dataSelect));
  }, [dispatch, dataSelect]);

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
