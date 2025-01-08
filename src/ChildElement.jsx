import { useState, useDebugValue } from 'react';

function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  useDebugValue(count); // Adds "count" value to DevTools
  return [count, setCount];
}

function ChildElement() {
  const [count, setCount] = useCount(5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ChildElement
