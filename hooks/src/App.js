
import { useBoolean, useCounter } from "./hooks";
export default function App() {
  const { value, setTrue, setFalse } = useBoolean();
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <>
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>

<div>
<p>Counter: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
</div>
</>
  );
}
