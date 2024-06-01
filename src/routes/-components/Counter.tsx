import { decrement, increment } from '../-functions/counterSlice';
import { useAppDispatch } from '@/app/hooks';

export const Counter = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type='button' aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type='button' aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};
