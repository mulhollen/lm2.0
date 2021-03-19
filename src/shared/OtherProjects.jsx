import React from 'react';
import { Link } from 'react-router-dom';
import AI from '../img/ArtInvestigator/mainsquare.jpg';
import Canvas from '../img/Canvas/Canvas.png';
import EverythingHappens from '../img/EverythingHappens/EHsquare.jpg';
import HSStore from "../img/hStreamStore/CovidBannerLaptop.png"


const OtherProjects = ({ current }) => {
  return (
    <section className="bodyWidth otherProjects">
      <h3 className="text-center nunito my-5">other projects:</h3>
      <div>
        <div className="d-flex flip">
          {current !== "hStreamStore" && (
            <div className="hovereffect m-3">
              <Link className="portLink" to='/hstreamStore'>
                <img src={HSStore} className="w-100" alt="logo" />
                <div className="overlay">
                  <p>hStream<br />store</p>
                </div>
              </Link>
            </div>
          )}
          {current !== "ArtInvestigator" && (
            <div className="hovereffect m-3">
              <Link className="portLink" to='/ArtInvestigator'>
                <img src={AI} className="w-100" alt="logo" />
                <div className="overlay">
                  <p>art<br />investigator</p>
                </div>
              </Link>
            </div>
          )}
          {current !== "Canvas" && (
            <div className="hovereffect m-3">
              <Link className="portLink" to='/Canvas'>
                <img src={Canvas} className="w-100" alt="logo" />
                <div className="overlay">
                  <p>canvas</p>
                </div>
              </Link>
            </div>
          )}
          {current !== "EverythingHappens" && (
          <div className="hovereffect m-3">
            <Link className="portLink" to='/EverythingHappens'>
              <img src={EverythingHappens} className="w-100" alt="logo" />
              <div className="overlay">
                <p>everything<br />happens</p>
              </div>
            </Link>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default OtherProjects;




