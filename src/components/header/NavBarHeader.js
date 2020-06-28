import React, { Component } from 'react'



export default class NavBarHeader extends Component {



  render() {
    return (
        <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#home">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#1">About</a></li>
                    <li><a href="#2">Portfolio</a></li>
                    <li><a href="#3">Services</a></li>
                    <li><a href="#4">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
