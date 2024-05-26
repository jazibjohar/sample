import React, { useCallback, useState } from 'react';

export const Button = ({ buttonName }) => {
  const [count, setCount] = useState(100);
  const testCallback = useCallback(() => {
    console.log('Loggin from here');
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    testCallback();
  };

  return (
    <div>
      <label>Counter: {count} </label>
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
};
