import React, {useState, useEffect} from 'react';
import Home from './Home';
import About from './About';

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
    <div className="container">
      <button data-page="home" onClick={onChangePage}>Home</button>
      <button data-page="about" onClick={onChangePage}>About</button>
      <PageComponent />
    </div>
  )
}

export default App;
