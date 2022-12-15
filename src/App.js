import React from 'react';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import TopContainer from './components/TopContainer/TopContainer';
import './App.css';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import TopHeader from './components/TopHeader/TopHeader';
import Footer from './components/Footer/Footer';
import AboutContainer from './components/AboutContainer/AboutContainer';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <TopContainer />
      <AboutContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <ContactUs />
      <Contact />
      <Footer />

    </div>
  )
}

export default App