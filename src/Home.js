import React, { Component } from 'react';
import Login from './login/Login'
import Contact from './contact/contact'
import logo from './logo.svg';
import $ from 'jquery/dist/jquery'
import './Home.css';

class Home extends Component {

  componentDidMount(){

    // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 70)
            }, 500, "linear");
            return false;
          }
        }
      });
    
      // Scroll to top button appear
      $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
     });
    
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
    
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mainNav',
        offset: 80
      });
  }


  render() {
    return (
      <div>
        <header className="masthead bg-primary text-white text-center">
          <div className="container">
            <img className="img-fluid mb-5 d-block mx-auto" src="images/email.png" alt="" />
            <h1 className="text-uppercase mb-0">Mail-Chain</h1>
            <hr className="glyphicon glyphicon-envelope" />
            <span className="glyphicon glyphicon-envelope"></span>
            <h2 className="font-weight-light mb-0">Email Service | Peer-to-Peer | Based on Etherium blockchain platform</h2>
          </div>
        </header>

   <Login />

    <section className="bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white">About</h2>
        <hr  />
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
             Mail-Chain is a decentralized email, giving you a peer-to-peer emailing service without a help of any centralized server tracing,  storing or controlling your email content.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Mail-chain is based on the very popular Etherium blockchain platform. Robust, secure and community supported.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Contact />

     <div className="copyright py-4 text-center text-white">
         <div className="container">
            <small>Copyright &copy; Mail-Chain 2018</small>
         </div>
      </div>
      <div className="scroll-to-top d-lg-none position-fixed ">
         <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
       </div>
   
    </div>
    );
  }
}

export default Home;
