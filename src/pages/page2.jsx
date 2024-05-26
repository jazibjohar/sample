import React, { useContext } from 'react';

import { GlobalState } from '../global_context';
import { Link } from 'react-router-dom';

export const Page2 = () => {
  const globalState = useContext(GlobalState);
  const userName = globalState.getUserName();
  console.log(globalState);

  return (
    <div>
      <h1>Page2</h1>
      <h1>Name: {userName}</h1>
      <Link to='/page1'>Go to Page1</Link>
      <h1>{globalState.state.joke}</h1>
    </div>
  );
};
