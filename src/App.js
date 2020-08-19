import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbarComponent';
import MainComponent from './components/mainComponent';
import FooterComponent from './components/footerComponent';
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
