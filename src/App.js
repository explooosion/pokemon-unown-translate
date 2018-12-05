import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import TranslateBox from './components/TranslateBox';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TranslateBox />
        <Footer />
      </div>
    );
  }
}

export default App;
