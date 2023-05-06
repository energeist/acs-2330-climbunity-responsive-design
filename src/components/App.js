import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <article className="App">
      <Header />
      <Outlet />
      <Footer />
    </article>
  );
}

export default App;
