import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";
import AboutUs  from '../pages/AboutUs';
// import ContactForm from '../Pages/ContactForm';
import Home from '../pages/Home';
// import Portfolio from '../Pages/Portfolio';
// import Quotation from '../Pages/Quotation';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/about" exact component={AboutUs}></Route>
                    {/* <Route path="/contact" exact component={ContactForm}></Route> */}
                    <Route path="/" exact component={Home}></Route> 
                    {/* <Route path="/portfolio" exact component={Portfolio}></Route> */}
                    {/* <Route path="/quotation" exact component={Quotation}></Route> */}
                </Switch>
            </BrowserRouter>

        );

    }
}