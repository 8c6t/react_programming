import React from 'react';

const Home = ({ username }) => {
  return (
    <div>
      <h3>This is Homepage</h3>
      {username && <p>{`${username}님 안녕하세요`}</p>}
    </div>
  );
}

export default Home;
