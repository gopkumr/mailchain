import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <img className="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt="" />
        <h1 className="text-uppercase mb-0">Start Bootstrap</h1>
        <hr className="star-light" />
        <h2 className="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2>
      </div>
    </header>

    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/cabin.png" alt="" />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
           <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/cake.png" alt="" />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/circus.png" alt="" />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/game.png" alt="" />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/safe.png" alt="" />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/submarine.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white">About</h2>
        <hr className="star-light mb-5" />
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="#">
            <i className="fas fa-download mr-2"></i>
            Download Now!
          </a>
        </div>
      </div>
    </section>


    <section id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">2215 John Daniel Drive
              <br />Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
              <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Your Website 2018</small>
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
