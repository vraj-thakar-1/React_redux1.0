import classes from "./Counter.module.css";
import { couterAction } from "../store/counter-slice";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(couterAction.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(couterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(couterAction.decrement());
  };
  const increseByFiveHandler = () => {
    dispatch(couterAction.increase(5)); //  pay load
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increseByFiveHandler}>increseByFive</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
