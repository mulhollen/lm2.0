import React from 'react';
import { Link } from 'react-router-dom';
import emojis from 'emojis-list';
import AI from '../img/ArtInvestigator/mainsquare.jpg';
import CanvasImg from '../img/Canvas/Canvas.png';
import EverythingHappens from '../img/EverythingHappens/EHsquare.jpg';
import Hstream from '../img/hStreamStore/CovidBannerLaptop.png';
import Squiggle from '../img/squiggleline.png';
import { Helmet } from "react-helmet";


const Portfolio = () => {
  return (
    <div className="bodyWidth">
      <Helmet>
        <title>LM | Portfolio</title>
      </Helmet>
      <h1 className="text-center nunito my-5">{emojis[1475]} here's what I've been working on:</h1>
      <div className="portfolioContent">
        <Link className="portLink" to='/HstreamStore'>
          <div className="d-flex justify-content-center yellow   flip">
            <div className="d-flex flex-column justify-content-between h-100 filp-50 p-5">
              <h2 className="mb-5">hStream<br />Store</h2>
              <p className="m-0">
                Modern React update enabling B2B and B2C transactions of courses in continuing healthcare education. Utilizing headless CMS Znode, I worked as one of two React developers architecting and building the site over a four-month zero-to-release period.
              </p>
              <i className="text-muted mt-5"> React - React Context API - React Hooks - Sass - Reactstrap - znode - Airbnb Prettier + ESLint - Enzyme - Jest</i>
            </div>
            <img className="pl-0  filp-50 portfolioImg" src={Hstream} alt="Laptop computer opened to a healthcare education marketplace website with a banner for covid education" />
          </div>
        </Link>
        <img src={Squiggle} className="portfolioContent__lineBreak" alt=" " />
        <Link className="portLink" to='/ArtInvestigator'>
          <div className="d-flex justify-content-center yellow   flip">
            <div className="d-flex flex-column justify-content-between h-100 filp-50 p-5">
              <h2 className="mb-5">art<br />investigator</h2>
              <p className="m-0">
                Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). Working with Nick Cave's Feat. exhibit at The Frist Museum in Nashville, Tennessee, Art Investigator is an interactive tour through the exhibit that focuses on learning, emotional intelligence, and creating interaction points for parents and their children.                           
              </p>
              <i className="text-muted mt-5"> CRUD Application - Firebase - Firebase Storage Bucket - Jquery - Sass - Bootstrap</i>
            </div>
            <img className="pl-0  filp-50 portfolioImg" src={AI} alt="iPad view of Art Investigator App home page with aligator illustration and buttons to get started" />
          </div>
        </Link>
        <img src={Squiggle} className="portfolioContent__lineBreak" alt=" " />
        <Link className="portLink" to='/Canvas'>
          <div className="d-flex justify-content-center yellow   flip">
            <div className="d-flex flex-column justify-content-between h-100 filp-50 p-5">
              <h2 className="mb-5">canvas</h2>
              <p className="m-0">
                Canvas is a multi-player, gamified, interactive art experience in the vain of The Cleveland Museum of Art ARTLENS Gallery exhibits. Canvas pits one to four players against each other to create a sort of exquisite corps of a broken-up piece of fine art.
              </p>
              <i className="text-muted mt-5"> React - Firebase - Rebase - Local Storage - React Canvas Draw - React Color - React Router Dom - Bootstrap</i>
            </div>
            <img className="pl-0  filp-50 portfolioImg" src={CanvasImg} alt="graphic of painters pallet with the word canvas" />
          </div>
        </Link>
        <img src={Squiggle} className="portfolioContent__lineBreak" alt=" " />
        <Link className="portLink" to='/EverythingHappens'>
          <div className="d-flex justify-content-center yellow   flip">
            <div className="d-flex flex-column justify-content-between h-100 filp-50 p-5">
              <h2 className="mb-5">everything<br />happens</h2>
                <p className="m-0">
                  A collaborative dance + interactive media piece that looks into hopes, dreams, and post-collegiate dissonance. Using research to inspire choreography, video production,  and set design,  <i>Everything Happens</i> was a live concert work of integrated media design and modern dance.
                </p>
                <i className="text-muted mt-5">Media Design - Stage Managing - Set Design - Video Production in Avid Media Composer & Adobe After Effects - Lighting Design</i>
            </div>
            <img className="pl-0  filp-50 portfolioImg" src={EverythingHappens} alt="Modern dancer in standing position with arms bent and raised, seated dancers and projections screens in background." />
          </div>
        </Link>
      </div>
    </div >
  );
}

export default Portfolio;




