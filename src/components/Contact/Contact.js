import { IconButton } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/Logo.png';
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn,YouTube} from "@material-ui/icons"
import "./Contact.css";

const Contact= () => {
  return (
    <Element className='contact'>
        <hr
        style={{
          background: 'lightgray',
          color: 'lightgray',
          borderColor: 'lightgray',
          height: '1px',
        }}
        />
       <div className='contact__container'>
            <div className='contact__container__left'>
             <img src={logo} alt="LOGO" />
                <p><i class="fa-regular fa-address-card"></i> 364, Anna Nagar, near Old RTO Office, Thuraiyur, Tamil Nadu - 621010.</p>
                <p><i class="fa-solid fa-phone"></i> +91 8754171788</p>
                <a href="https://outlook.office.com/mail/"><i class="fa-solid fa-envelope"></i> support@umegrow.com</a>
            </div>
            <div className='contact__container__right'>
            <div className='contact__container__right1'>
                <p>QUICK LINKS</p>
                <hr/>
                <a href="www.google.com">HOME</a>
                <a href="www.google.com">WHO WE ARE</a>
                <a href="www.google.com">WHAT WE DO</a>
                <a href="www.google.com">CONTACT US</a>
            </div>
            <div className='contact__container__right2'>
                <p>HELP</p>
                <hr/>
                <a href='www.google.com'>PRIVACY POLICY</a>
                <a href='www.google.com'>TERMS AND CONDITIONS</a>
            </div>
            <div className='contact__icons__right'>
                <p>FOLLOW US</p>
                <hr/>
                <a href='https://www.youtube.com/channel/UCCmty7KebOEvCfD87w_YUdg'>
                    <IconButton>
                        <YouTube />
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/ume.grow.9/ow.9/com'>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/umegrow//umegrow/om'>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
                <a href='https://www.linkedin.com/in/umegrow/'>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
            </div>
            </div>
        </div>
    </Element>
  )
}

export default Contact;