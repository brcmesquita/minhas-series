import React, { useState, useEffect } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return <div>Home</div>;
};

const Generos = () => {
  return <div>Gêneros</div>;
};

function App() {
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Generos} />
      </div>
    </Router>
  );
}

export default App;
