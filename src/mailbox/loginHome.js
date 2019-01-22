import React, {Component} from 'react'
import MailList from './maillist'
import Sidebar from './sidebar'
import MailComposer from './composer/mailcompose'
import './loginHome.css'

export default class LoginHome extends Component
{
    constructor(props){
        super(props);

        this.state={mailSource:"Inbox"};

        this.folderSelected=this.folderSelected.bind(this);
    }

    folderSelected(folderName){
        this.setState({mailSource:folderName});
    }

    render()
    {
        return (
            <section className="bg-primary text-white mb-0 inboxSection">
             <div className="container wrapper">
                  <Sidebar onSelect={this.folderSelected}/>
                  <div id="content">
                  <button className="btn btn-light" onClick={(e)=>{this.folderSelected("Compose");}}>Compose</button>
                  <hr/>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <RenderContentSection mailSource={this.state.mailSource} />
                  </nav>
                  </div>
                  
              </div>
            </section>
        );
    }
};

function RenderContentSection(props)
{
    switch (props.mailSource) {
        case 'Compose':
            return <MailComposer />;
        default:
            return <MailList source={props.mailSource} />;
    }
}
