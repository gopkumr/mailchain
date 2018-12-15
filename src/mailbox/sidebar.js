import React, { Component } from 'react'
import $ from 'jquery'
import './sidebar.css'

class Sidebar extends Component{

componentDidMount(){
  
  $('#toggleBtn').on('click', function () {
    $('#sidebar').toggleClass('active');
});
}

    render(){
        return(
            <nav id="sidebar" className="bg-secondary">
              <div className="sidebar-header">
                 <h3>UserName</h3>
                <strong>UN</strong>
                <button className="btn btn-light" id="toggleBtn">
                  <div id="collapse">((((</div>
                  <div id="expand">)))))</div>
                </button>
              </div>

              <ul class="list-unstyled components">
                <li class="active">
                  <a href="#">
                    <i className="fas fa-home"></i>
                    Inbox
                 </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-briefcase"></i>
                    Junk
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-briefcase"></i>
                    Deleted
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-briefcase"></i>
                    Sent
                  </a>
                </li>
             </ul>
        </nav>
        );
    }
}

export default Sidebar;