import React, { Fragment } from 'react';
import './App.css';
import NavBarHeader from './components/header/NavBarHeader';
import Jumbotron from './components/jumbotron/Jumbotron';
import Service from './components/services/Services';

function App() {
  return (
    <Fragment>
    <NavBarHeader></NavBarHeader>
    <Jumbotron></Jumbotron>
    <Service></Service>
    </Fragment>
  );
}

export default App;
