import React, { useEffect } from 'react';

export const Button = ({ buttonName, onClick }) => {
  useEffect(() => {
    console.log('on mount');
  }, []);
  return (
    <div>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};
