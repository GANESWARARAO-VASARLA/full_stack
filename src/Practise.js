import React, { useEffect, useLayoutEffect, useState } from 'react';

function Practise() {
  const [count, setCount] = useState(0);

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect: Count is', count);
  // });

  // useEffect(() => {
  //   console.log('useEffect: Count is', count);
  // });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Practise
