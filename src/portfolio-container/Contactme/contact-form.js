import React, { useRef, useState }  from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


import "./Contact-form.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
 
  const form = useRef();
  const [text,settext] = useState('')
  const [mystyle , setmystyle] = useState({
    display : 'none'
  })
  const sendEmail = (e) => {
    if(text.length=== 0 ){
      alert("Fill Name & Email")
    }
    else{
      e.preventDefault();

    emailjs
      .sendForm(
        "service_nid8cqh",
        "template_b1ysnbm",
        form.current,
        "k3Ii_J7VPHsm9Pclg"
      )
      .then(
        (result) => {
          toast.success("Success Notification !");
          console.log(result.text);
          console.log("message sent");
        
        },
        (error) => {
          console.log(error.text);
         
        }
      );
    }
  };
  
   
  const newtext = (event)=>{
    settext(event.target.value)
  }
  
  return (
    
    <>
      <div className="main">
        <div className="form">
          <div className="head">
            <h1>Contact Me</h1>
          </div>
          <div className="input">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder=" Your Name"  value={text} onChange={newtext} />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Your Email"   />
              <label>Message</label>
              <textarea name="message" placeholder="Your Message"  />
              <button type="submit" value="Send" className="btn_submit" onClick={onclick}  title="Submited1" data-content="" >
                Submit
              </button>
              
              <label style={mystyle}>Your response will submited </label>
            </form>
          </div>
        </div>
        <div className="contact-profile">
          <div className="head">
            <h1>Contact Info</h1>
          </div>
          <div className="info">
          <i className="fa fa-phone" aria-hidden="true"></i>
            <h1>6394043179</h1>
          </div>
          <div className="info">
          <i className="fa fa-share" aria-hidden="true"></i>
            <h1>prabalkapoor786@gmai.com</h1>
          </div>
          <div className="info">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
             <h1><a href="https://www.linkedin.com/in/prabal-kapoor-824413221/">Profile</a></h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
