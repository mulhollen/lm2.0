import React from 'react';
import { Link } from 'react-router-dom';
import emojis from 'emojis-list';
import AI from '../img/ArtInvestigator/mainsquare.jpg';
import Canvas from '../img/Canvas/Canvas.png';
import EverythingHappens from '../img/EverythingHappens/EHsquare.jpg';
import HSStore from "../img/hStreamStore/storeComputerView.png"


const MinimalPortfolio = () => {
  return (
    <section className="bodyWidth">
      <h2 className="text-center nunito my-5">{emojis[1475]} here's what I've been working on:</h2>
      <div>
        <div className="d-flex flex-row">
          <div className="hovereffect m-3">
            <img src={HSStore} className="w-100" alt="logo" />
            <div className="overlay">
              <Link className="portLink" to='/hstreamStore'><h2>hStream<br />store</h2></Link>
            </div>
          </div>
          <div className="hovereffect m-3">
            <img src={AI} className="w-100" alt="logo" />
            <div className="overlay">
              <Link className="portLink" to='/ArtInvestigator'><h2>art<br />investigator</h2></Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="hovereffect m-3">
            <img src={Canvas} className="w-100" alt="logo" />
            <div className="overlay">
              <Link className="portLink" to='/Canvas'><h2>canvas</h2></Link>
            </div>
          </div>
          <div className="hovereffect m-3">
            <img src={EverythingHappens} className="w-100" alt="logo" />
            <div className="overlay">
              <Link className="portLink" to='/EverythingHappens'><h2>everything<br />happens</h2></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MinimalPortfolio;




