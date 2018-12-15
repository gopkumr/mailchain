import React, {Component} from 'react'
import MailList from './maillist'
import Sidebar from './sidebar'
import './inbox.css'

class Inbox extends Component
{
    render()
    {
        return (
            <section className="bg-primary text-white mb-0 inboxSection">
             <div className="container wrapper">
                  <Sidebar/>
                  <MailList />
              </div>
            </section>
        );
    }
}

export default Inbox;