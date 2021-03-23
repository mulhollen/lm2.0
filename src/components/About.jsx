import React from 'react';
import lindsay from '../img/LittleLinds.png';
import emojis from 'emojis-list';
import Social from '../shared/Social';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about bodyWidth d-flex justify-content-center mt-5 about-div">
      <Helmet>
        <title>LM | About</title>
      </Helmet>
      <img src={lindsay} className="widthBlock-50" alt="Lindsay as a small child lounging in front of a toy computer" />
      <div className="aboutWidth">
        <h1 className="mb-4 nunito">It's ya girl {emojis[1244]}</h1>
        <p>
          Inspired to get a start in development after encountering interactive museum exhibits, I'm growing my passion for puzzle solving, brainstorming, and outside of the box thinking as an Apprentice Front-end Developer + UX/UI Designer at Nashville Software School. 
          <br />
          <br />                        
          I'm excited to bring my unique background to the development world where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.
        </p>
        <Social />
      </div>
    </div>
  );
}

export default About;



