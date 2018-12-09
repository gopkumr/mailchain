import React, {Component} from 'react'
import './login.css'

class Login extends Component
{
    render()
    {
        return (
            <section className="login" id="login">
            <div className="container">
              <h2 className="text-center text-uppercase text-secondary mb-0">Login</h2>
              <hr className="star-dark mb-5" />
              <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                 <div className="card">
                    <div className="card-header bg-primary text-white text-center"><h5>Login using your Etherium wallet account and Metamask</h5></div>
                    <div className="card-body">Content</div> 
                    <div className="card-footer">Footer</div>
                 </div>
               </div>
              </div>
            </div>
          </section>
        );
    }

}

export default Login;