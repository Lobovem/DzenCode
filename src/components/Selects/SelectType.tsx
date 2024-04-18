import { Form } from 'react-bootstrap';
import { FC } from 'react';
import { dataSelectChange } from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Select.scss';

export const SelectType: FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedType = e.target.value;
    dispatch(dataSelectChange({ type: selectedType }));
  };

  const selectValue = useSelector((state: RootState) => state.dzenCode.dataSelect);

  return (
    <div className="select">
      <p className="select__title">{title}:</p>
      <Form.Select
        defaultValue={selectValue.type}
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
