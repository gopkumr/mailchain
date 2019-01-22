import React, { Component } from 'react'

import './maillist.css'
class MailList extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="mailItem">
            <h3>{this.props.source}</h3>
             <div className="container-fluid">
                   <ul className="list-group mailItem">
                     <li className="list-group-item">Item 1</li>
                     <li className="list-group-item">Item 1</li>
                     <li className="list-group-item">Item 1</li>
                   </ul>
             </div>
            </div>

        );
    }
}

export default MailList;