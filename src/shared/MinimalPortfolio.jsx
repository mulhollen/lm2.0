import React from 'react';
import { Link } from 'react-router-dom';
import emojis from 'emojis-list';
import AI from '../img/ArtInvestigator/mainsquare.jpg';
import Canvas from '../img/Canvas/Canvas.png';
import EverythingHappens from '../img/EverythingHappens/EHsquare.jpg';
import HSStore from "../img/hStreamStore/CovidBannerLaptop.png"


const MinimalPortfolio = () => {
  return (
    <section className="bodyWidth">
      <h2 className="text-center nunito my-5">{emojis[1475]} here's what I've been working on:</h2>
      <div>
        <div className="d-flex flex-row">
          <div className="hovereffect m-3">
            <Link className="portLink" to='/hstreamStore'>
              <img src={HSStore} className="w-100" alt="logo" />
              <div className="overlay">
                <h3>hStream<br />store</h3>
              </div>
            </Link>
          </div>
          <div className="hovereffect m-3">
            <Link className="portLink" to='/ArtInvestigator'>
              <img src={AI} className="w-100" alt="logo" />
              <div className="overlay">
                <h3>art<br />investigator</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="hovereffect m-3">
            <Link className="portLink" to='/Canvas'>
              <img src={Canvas} className="w-100" alt="logo" />
              <div className="overlay">
                <h3>canvas</h3>
              </div>
            </Link>
          </div>
          <div className="hovereffect m-3">
            <Link className="portLink" to='/EverythingHappens'>
              <img src={EverythingHappens} className="w-100" alt="logo" />
              <div className="overlay">
                <h3>everything<br />happens</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MinimalPortfolio;




