import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Home from './Home';
import About from './About';
import Icon from './icon.png';

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

const fetchUsername = () => {
  const usernames = ['mike', 'june', 'jamie'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
}

const App = ({ page:indexPage }) => {
  const [page, setPage] = useState(indexPage);
  const [username, setUsername] = useState('');

  useEffect(() => {
    window.onpopstate = event => {
      setPage(event.state);
    }

    fetchUsername().then(username => setUsername(username));
  }, []);
  
  const onChangePage = (e) => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    setPage(page);
  }

  const PageComponent = page === 'home' ? Home: About
  return (
    <Container>
      <button data-page="home" onClick={onChangePage}>Home</button>
      <button data-page="about" onClick={onChangePage}>About</button>
      <PageComponent username={username} />
      <img src={Icon} />
    </Container>
  )
}

export default App;
