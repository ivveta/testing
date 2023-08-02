import { Provider, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slice';
import { store } from './store';

export const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <Provider store={store}>
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span aria-label="count">{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </Provider>
  );
};
