import { FC } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/slices';

export const HomePage: FC = () => {
  const count = useSelector((state: RootState) => state.dzenCode.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home page</h2>
      <button aria-label="Decrement value" onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <h3>{count}</h3>
    </div>
  );
};
