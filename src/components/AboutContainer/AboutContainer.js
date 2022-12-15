import React from 'react'
import { Element } from 'react-scroll';
import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <Element name='about' className='aboutContainer' >
        <h1>Why Choose US!</h1>
        <p>
            A wise choice would brighten your career/business. UMeGrow Services is an emerging firm which perceives Client's expectation and assist them in achieving their Target.
            <br/>
            UMeGrow Training Division provide Corporate Standard trainings with economic price. We have Corporate Expert Trainer who can lively train anyone with real-time work environment use cases.
            <br/>
            UMeGrow Development Division owns industry Subject Matter Experts who develop mobile /web application in such a way that brings value into your business.
        </p>
        <hr
        style={{
          background: 'lightgray',
          color: 'lightgray',
          borderColor: 'lightgray',
          height: '1px',
        }}
        />
    </Element>
  )
}

export default AboutContainer