import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Home from './Home';
import About from './About';
import Icon from './icon.png';

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

const App = ({ page:indexPage }) => {
  const [page, setPage] = useState(indexPage);
  
  useEffect(() => {
    window.onpopstate = event => {
      setPage(event.state);
    }
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
      <PageComponent />
      <img src={Icon} />
    </Container>
  )
}

export default App;
