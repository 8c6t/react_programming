import React from 'react';
import { getValue } from './legacy';
import Icon from './icon.png';
window.myValue = 123;

const App = ({ name, age }: { name: string; age: number }) => {
  const value = getValue();
  console.log(value.toFixed(2));

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default App;
