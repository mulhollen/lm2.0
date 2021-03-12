import React from "react";
import Video from '../shared/Video';
import Original from "../img/hStreamStore/hstream_original.png"
import CovidBanner from "../img/hStreamStore/home_banner_covid.png"

const HstreamStore = () => {
  return (
      <div>
        <Video video="https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/hstreamstorewalkthrough.mp4?alt=media&token=fba5482c-b21e-4c31-b926-92504f46ca20" />                
        <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
          <h1 className="mt-5 text-center portH1">Improving the quality of healthcare by developing the people who deliver care</h1>
          <h3 className="m-5">Modern React update enabling B2B and B2C transactions of courses in continuing healthcare education. Utilizing headless CMS Znode, I worked as one of two React developers architecting and building the site over a four-month zero-to-release period.</h3>
        </div>
        <div className="bodyWidth d-flex justify-content-center yellow mb-3 mx-auto flip">
          <div>
            <h3 className="px-5 pt-5">meet hStream 1.0</h3>
            <p className="px-5 py-3">
              This is the challenge
            <br /><br />
              This is what we did
            </p>
          </div>
          <img className="pl-0 portPic" src={Original} alt="" />
        </div>
        <div className="bodyWidth p-5 my-5 border border-dark">
          <div>
            <h3 className="mb-4">the tech stack:</h3>
            <ul className="px-5 py-3">
                  <li>Create an engaging and interactive way for the user to experience and understand art.</li>
                  <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
                  <li>Foster realitibly and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
                  <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
                  <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
              </ul>
          </div>
        </div>
        <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
          <img className="pl-0 portPic" src={CovidBanner} alt="" />
          <div>
              <h3 className="px-5 pt-5">user focused goals:</h3>
              <p className="px-5 py-3">
                This is the challenge
                <br /><br />
                This is what we did
            </p>
          </div>
        </div>
        <div className="bodyWidth p-5 my-5 border border-dark">
          <div>
            <h3 className="mb-4">the code:</h3>
            <p className="px-5 py-3">
                Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br /><br />
                Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
            </p>
          </div>
        </div>
        <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
          {/* <img className="pl-0 portPic" src={search} alt="" /> */}
          <div>
            <h3 className="px-5 pt-5">lessons learned:</h3>
            <ul className="px-5 py-3">
                <li>Create an engaging and interactive way for the user to experience and understand art.</li>
                <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
                <li>Foster realitibly and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
                <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
                <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
            </ul>
          </div>
        </div>
        {/* <img className="w-100 mt-5" src={liv} alt="" /> */}
      </div>
  );
}

export default HstreamStore;