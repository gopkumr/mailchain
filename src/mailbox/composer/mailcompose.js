import React, {Component} from 'react'
import './mailcompose.css'

class MailComposer extends Component{

    render(){
        return (
            <div className="mailCompose">
                <h3>Composer</h3>
                    <div className="form-group">
                      <label>To User Name</label>
                      <input type="text" className="form-control" id="mailReciepient" placeholder="User name of the reciepient" />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" className="form-control" id="mailSubject" placeholder="Subject of the mail" />
                    </div>
                    <div className="form-group">
                        <label>Mail Content</label>
                        <textarea minLength="1000" className="form-control" id="mailContent" placeholder="Content" />
                    </div>
                    <button className="btn btn-secondary">Send</button>
          </div>
        );
    }
}

export default MailComposer;