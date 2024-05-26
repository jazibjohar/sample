import React, { useContext } from 'react';

import { GlobalState } from '../global_context';
import { Link } from 'react-router-dom';

export const Page1 = () => {
  const globalState = useContext(GlobalState);
  const onChange = (e) => {
    globalState.setUsername(e.target.value);
  };
  return (
    <div>
      <h1>Page1</h1>
      <input onChange={onChange} type='text' placeholder='Enter your name' />
      <Link to='/page2'>Go to Page2</Link>
      <button onClick={globalState.getJoke.bind(globalState)}>Get Joke</button>
      <h1>{globalState.state.joke}</h1>
    </div>
  );
};
