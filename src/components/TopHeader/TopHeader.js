import React from 'react'
import {IconButton} from '@material-ui/core'
import {Facebook,Instagram,LinkedIn,YouTube} from "@material-ui/icons"
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className='topheader'>
        <div className='topheader__left'>
            <a href="https://outlook.office.com/mail/">support@umegrow.com</a>
            <span>+91 8754171788</span>
        </div>
        <div className='topheader__right__icons'>
        <a href='https://www.youtube.com/channel/UCCmty7KebOEvCfD87w_YUdg'>
            <IconButton>
                <YouTube  />
            </IconButton>
        </a>
        <a href='https://www.facebook.com/ume.grow.9/'>
            <IconButton>
                <Facebook />
            </IconButton>
        </a>
        <a href='https://www.instagram.com/umegrow/'>
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

  )
}

export default TopHeader