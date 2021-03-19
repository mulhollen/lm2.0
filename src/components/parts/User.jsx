import React from 'react';
import lindsay from '../../img/LittleLinds.png';
import emojis from 'emojis-list';
import { Link } from 'react-router-dom';


const User = () => {
  return (
    <div className="myspace__user m-3">
      <h2>Lindsay Mulhollen</h2>
      <div className="d-flex flex-column">
        <div className="d-flex mb-3">
          <img src={lindsay} className="mr-3" alt="Lindsay as a small child lounging in front of a toy computer" />
          <div className="d-flex flex-column">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <p>":-)"</p>
                <p className="m-0">She/They</p>
                <p className="m-0">Nashville,</p>
                <p className="m-0">TENNESSEE</p>
                <p className="m-0">United States</p>
              </div>
              <p className="m-0">last login: 03/18/21</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-0"><b>Mood:</b> busy {emojis[1815]}</p>
          <p className="mb-0">View My: <Link to="/">Pics</Link> | <a href="https://vimeo.com/50633850">Videos</a></p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default User;


