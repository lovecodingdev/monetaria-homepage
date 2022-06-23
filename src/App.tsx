import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Header/>
      <Landing/>
      <Footer/>
    </>
  );
}

export default App;
