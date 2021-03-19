import React from 'react';
import User from './parts/User';
import Contact from './parts/Contact';
import Interests from './parts/Interests';
import Details from './parts/Details';
import Schools from './parts/Schools';
import Status from './parts/Status'
import emojis from 'emojis-list';

const Myspace = () => {
  console.log(emojis);
  return (
    <section className="myspace">
      <div className="myspace__left">
        <User />
        <Contact />
        <div className="myspace__url mb-3 mx-3">
          <p className="m-0"><b>Myspace Url:</b></p>
          <p className="pl-2 m-0">http://www.lindsaymulholen.com/myspace</p>
        </div>
        <Interests />
        <Details />
        <Schools />
      </div>
      <div className="myspace__right pl-4">
        <Status />
      </div>
    </section>
  );
}

export default Myspace;


