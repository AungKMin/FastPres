import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import FileDownload from 'js-file-download'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
