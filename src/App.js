import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { Button } from './components/button';

function App() {
  const [count, setCount] = useState(0);
  const updateCount = useCallback(
    (operation) => {
      if (operation === '+') {
        setCount(count + 1);
      }
      if (operation === '-') {
        setCount(count - 1);
      }
      if (operation === 'X') {
        setCount(count * 2);
      }
      if (operation === '/') {
        setCount(count / 2);
      }
    },
    [count, setCount]
  );
  const operations = [
    {
      buttonName: '+',
      onClick: () => updateCount('+'),
    },
    {
      buttonName: '-',
      onClick: () => updateCount('-'),
    },
    {
      buttonName: 'Reset',
      onClick: () => setCount(0),
    },
    {
      buttonName: 'X',
      onClick: () => updateCount(`X`),
    },
    {
      buttonName: '/',
      onClick: () => updateCount('/'),
    },
  ];
  useEffect(() => {
    console.log('counter rendered');
  }, [count]);
  return (
    <div className='App'>
      <header className='App-header'></header>
      <h1>Count: {count}</h1>
      {operations.map((operation, index) => (
        <Button key={`${index}-${count}`} {...operation} />
      ))}
    </div>
  );
}

export default App;
