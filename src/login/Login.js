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
              <hr  />
              <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                 <div className="card">
                    <div className="card-header bg-primary text-white text-center"><h5>Login using your Etherium wallet account and Metamask</h5></div>
                    <div className="card-body">
                      <div class="form-group">
                        <label>Wallet address:</label>
                        <input type="text" className="form-control" id="walletAccount" />
                       </div>
                       <button type="submit" className="btn btn-primary text-right">Login</button>
                    </div> 
                    <div className="card-footer">Not registered yet? <a href="/register">Register here</a></div>
                 </div>
               </div>
              </div>
            </div>
          </section>
        );
    }

}

export default Login;