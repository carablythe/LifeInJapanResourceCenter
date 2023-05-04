import React from 'react'
// import './Popup.css'

const Popup = (props) => {

  return (props.trigger) ? (
    <div className= "Popup">
      <div className= "Popup-inner">
        <button className="close-btn" onClick ={()=> props.setTrigger(false)}>close</button>
        { props.children }
      </div>
    </div>
  ): "";
}

export default Popup


// The above popup window, the popup.css and corresponding button functionality on the Navbar came from this YouTube tutorial:
// https://www.youtube.com/watch?v=i8fAO_zyFAM
