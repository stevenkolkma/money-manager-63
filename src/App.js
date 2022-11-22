import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(deposit(parseInt(number)))}>
        Deposit custom amount
      </button>
      <button onClick={() => dispatch(withdraw(parseInt(number)))}>
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
