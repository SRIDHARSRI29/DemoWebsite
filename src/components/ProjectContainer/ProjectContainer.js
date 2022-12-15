import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
    const projects =[
        {
            img: "https://www.germany-visa.org/wp-content/uploads/2019/11/working-freelancer-germany.jpeg",
            title: "Freelancer",
            desc: "An individual who makes money on a per-job basis is a freelancer. They usually earn on a per-task basis and generally work for a short time.",
            link: "www.google.com",
        },
        {
            img: "https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2019/11/04160101/facial-recognition-for-biometric-access-control-housing-1024x662.jpeg",
            title: "Face-Detection",
            desc: "Face detection -- also called facial detection. It is an artificial intelligence (AI) based computer technology used to find and identify human faces in digital images.",
            link: "www.google.com",
        },
        {
            img: "https://www.plm.automation.siemens.com/media/global/en/complaint-management-software-og-1200x630_tcm27-99658.jpg",
            title: "Complaints",
            desc: "A CMS is a step-by-step way of receiving, recording, processing, responding to and reporting on complaints and using them to improve systems, decision-making and service delivery.",
            link: "www.google.com",
        },
        {
            img: "https://www.icriindia.com/blog/wp-content/uploads/2016/12/Blog_0009_41-825x510.jpg",
            title: "Hospital",
            desc: "It is the management that helps in managing the functioning of the hospital or a health unit. It integrates various departments of a health care unit, like clinical, non-clinical and supporting departments.",
            link: "www.google.com",
        },
        {
            img: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2012/05/20172622/ce-travel.jpg",
            title: "Travel",
            desc: "Travel refers to the act of moving from one location to another. This can refer to long-distance travel, short-distance travel, overseas travel, domestic travel and various other forms.",
            link: "www.google.com",
        },
        {
            img: "https://media.istockphoto.com/id/1213615970/photo/gym-background-fitness-weight-equipment-on-empty-dark-floor.jpg?s=612x612&w=0&k=20&c=WyPxLxpfd9Pi6l0BMyWsqrrZIi_SrMmgTtYn8k08qQI=",
            title: "Gym",
            desc: "A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term gymnasium.",
            link: "www.google.com",
        },

    ];
  return (
    <Element className="projectContainer" id="projects">
        <h2>Projects</h2>
        <p>Here are some projects which I done for making lives of people easy.</p>
        <div className='projectContainer__projects'>
    {
        projects.map((project,index)=>{
            return (
                <Project
                    Key={index}
                    img={project.img} 
                    title={project.title} 
                    desc={project.desc} 
                    link={project.link}/>
            )
        })
    }
        </div>
    </Element>
  )
}

export default ProjectContainer