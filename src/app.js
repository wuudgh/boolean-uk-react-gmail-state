import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'
import React, {useState} from 'react';

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);
  const [hideread, setHideRead] = useState(false)
  const emailsElements = emails.map(function(element){
    console.log(element)
    return <li>
      <input type="checkbox"></input>       
      <span>{element.sender}</span>
      <span>{element.title}</span>
      </li>
  })

  console.log(initialEmails)

  return (
    <div className="app">
      <Header />
     
      <nav className="left-menu">

        <ul className="inbox-list">
      
          <li
            className="item active"
              onClick={() => {}}

           
          

          >
            <span className="label">Inbox</span>
            <span className="count"></span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emailsElements}</main>
      <label type = "checkbox"></label>
    </div>
  )
}

export default App
