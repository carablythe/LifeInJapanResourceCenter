import React, {useState} from 'react'
import Popup from './Popup'

const Navbar = () => {

  const [buttonPopup, setButtonPopup] = useState(false);


  return (
      <>
        <aside className = "nav">
            <h1 className = "header">Life in Japan: Resource Center</h1>
              <ul className= "navbar">
              <li className="navList"><a href= "/">Home </a>
              </li>
              <li className="navList"><a href= "../pages/forum">Forum </a>
              </li>
              <li className="navList"><a href="../pages/contact">Contact </a>
              </li>
              <li className="navList"><a href= "../pages/userProfile">Login/out </a>
              </li>
              <li className="navList"><a href="https://www.google.com/">Safe Exit </a>
              <button className='safeExitExplanation' onClick={() => setButtonPopup(true)} > What's this? </button>
                    <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                      <h3>What is <em>Safe Exit</em>?</h3> <h4>Given the sensitive nature of some of the information provided on this site, if you are in a situation where you need to quickly leave this page for fear of someone seeing what you are reading, please click "Safe Exit". Make sure to also clear your browser history/data each time you are finished collecting information and to save useful information in a password-protected folder, drive or email account as soon as possible.</h4>
                    </Popup>
              </li>
          </ul>
        </aside>
      </>
    )
}

export default Navbar
