import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import "./ContactUs.css";


const ContactUs = () => { 
  
  /*const [form] = form.useform();
  const onFinish =(values) => {
    setTimeout(() => {
      form.resetFields();
    },500);
  }*/

  const [userName, setUserName]= useState('');
  const [email, setEmail]= useState('');
  const [code, setCode]= useState('');
  const [phone, setPhone]= useState('');
  const [message, setMessage]= useState('');  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_92ek40h', 'template_9ber4vw', form.current, '6y3DPFFD1RmyD39Jf')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      console.log('handleSubmit ran');
      e.preventDefault();
      setUserName('');
      setEmail('');
      setCode('');
      setPhone('');
      setMessage('');

  };

  return (

         /* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>*/

 
      <div className='form_container' id="contact">
        
        <form ref={form} onSubmit={sendEmail} >  
         <h2>Get in touch</h2>
         <h3>We are here for you.</h3>
         <hr
        style={{
          background: 'lightgray',
          color: 'lightgray',
          borderColor: 'lightgray',
          height: '1px',
          margin: '10px',
        }}/>
         <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input class="input-field" type="text" placeholder="Username" name="username"  value={userName} 
            onChange={(e) => setUserName(e.target.value)}/> 
        </div>
        <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input class="input-field" type="text" placeholder="Email" name="email"   onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </div>
        <div class="input-container">
          <i class="fa fa-plus icon"></i>
          <input class="input-field" type="tel" placeholder="Code" name="code" maxLength="2"  value={code
          } 
            onChange={(e) => setCode(e.target.value)} />
          
          <i class="fa fa-phone icon"></i>
            <input class="input-field" type="tel" placeholder="Phone Number" name="phone" maxLength="10"  value={phone} 
            onChange={(e) => setPhone(e.target.value)} />
        </div>
        {/*<div class="input-container">
            <i class="fa fa-key icon"></i>
            <input class="input-field" type="password" placeholder="Password" name="psw"/>
        </div>*/}
        <div class="input-container">
            <textarea  name="message" placeholder= " Write your message" value={message} 
            onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type="submit" class="btn"  >Submit</button>
        </form>
        </div>   

  )
}

export default ContactUs