import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggle, setState, trueFalseValue } from './trueFalseSlice';

export function TrueFalse() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(trueFalseValue);
    console.log(value);

    return (
      <div>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
        <button onClick={() => dispatch(setState(true))}>true</button>
        <button onClick={() => dispatch(setState(false))}>false</button>
        <span>{value.toString()}</span>
      </div>
    );
  }
  