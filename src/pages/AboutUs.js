import React, { Fragment } from 'react';
import NavBarHeader from '../components/header/NavBarHeader';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Service from '../components/services/Services';

export default function AboutUs() {
  return (
    <Fragment>
    <NavBarHeader></NavBarHeader>
    <Jumbotron></Jumbotron>
    <Service></Service>
    </Fragment>
  );
}

