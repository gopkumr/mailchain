import React, {Component} from 'react';
import $ from 'jquery/dist/jquery'
import './Navigation.css';

class Navigation extends Component
{
  componentDidMount()
  {
     // Collapse Navbar
     var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
  
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

     render()
     {
         return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Mail-Chain</a>
              <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         );
     }
}

export default Navigation;