import React from 'react';
import { Element } from 'react-scroll';
import skillimg from '../../assets/skills.jpg';
import LinearProgress from '@material-ui/core/LinearProgress';
import './SkillContainer.css';

const SkillContainer = () => {
  return (
  <Element className='skillContainer' id='skills'>
    <div className='skillContainer__image'>
        <img src={skillimg} alt="" />
    </div>
    <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillSet'>
            <h5>ServiceNow</h5>
            <div className='skillContainer__silder skillContainer__silder1'>
                <LinearProgress variant="determinate" value={90}/> 
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>React</h5>
            <div className='skillContainer__silder skillContainer__silder2'>
                <LinearProgress variant='determinate' value={75}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>Java</h5>
            <div className='skillContainer__silder skillContainer__silder3'>
                <LinearProgress variant='determinate' value={60}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>Adobe Photoshop</h5>
            <div className='skillContainer__silder skillContainer__silder4'>
                <LinearProgress variant='determinate' value={87}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>C & C++</h5>
            <div className='skillContainer__silder skillContainer__silder5'>
                <LinearProgress variant='determinate' value={50}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>COA</h5>
            <div className='skillContainer__silder skillContainer__silder6'>
                <LinearProgress variant='determinate' value={90}/>
            </div>
        </div>
    </div>
  </Element>
  )
}

export default SkillContainer