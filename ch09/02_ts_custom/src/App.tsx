import React from 'react';

const App = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default App;
