import './App.css';

import { Button } from './components/button';
import { useState } from 'react';

function App() {
  const [state, setState] = useState();
  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className='App'>
      <header className='App-header'></header>
      <h1>Hello World</h1>
      <input onChange={onChange} type='text' />
      <Button buttonName={state ?? 'No Input'} />
      <Button buttonName='Button 2' />
      <Button buttonName='Button X' />
      <Button buttonName='Button A' />
      <Button buttonName='Button c' />
    </div>
  );
}

export default App;
