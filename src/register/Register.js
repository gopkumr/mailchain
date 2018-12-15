import React,{Component} from 'react'
import './Register.css'

class Register extends Component
{
    render(){
        return (
                 <section className="bg-primary text-white mb-0 RegisterHeader">
                 <div className="container">
                    <h2 className="text-center text-uppercase text-white">Register</h2>
                    <hr  />
                    <form>
                        <div className="form-group">
                            <label>Etherium address</label>
                            <input type="text" className="form-control" id="address" disabled />
                            <small className="form-text text-muted">Address is picked from Metamask logged in account.</small>
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" id="userName" placeholder="Enter username" />
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                    </div>
                 </section>
        );
    }
}

export default Register;