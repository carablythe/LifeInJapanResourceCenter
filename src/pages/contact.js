import React from 'react'


const Contact = () => {


  return (
    <>
    <aside className = "contact">
        <h3 className ="contactTitle">Send a Message to the Admin:</h3>
        <form action = "https://formsubmit.co/carablythephillips@gmail.com" method = "POST" >
            <input type= "text"
             name = "name"
             placeholder="Your name"
             required />
            <br/>
            <input type="email"
             name = "email" placeholder="Your email address" required />
            <br/>
            <input type="text"
              name = "subject" placeholder = "Message subject" />
            <br/>
            <textarea
              name = "message" placeholder = "Please write your message here."
              required>
            </textarea>
            <br/>
            <button className="submit">Send Message</button>
        </form>
    </aside>
    </>
  )
}

export default Contact

// The above contact tip via formsubmit was learned in this tutorial: https://www.youtube.com/watch?v=r4RQ38EoLds
