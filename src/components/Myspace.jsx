import React from 'react';
import User from './parts/User';
import Contact from './parts/Contact';
import Interests from './parts/Interests';
import Details from './parts/Details';
import Schools from './parts/Schools';
import Status from './parts/Status'
import Blurbs from './parts/Blurbs';
import Top8 from './parts/Top8';
import Comments from './parts/Comments';
import { Helmet } from "react-helmet";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

const Myspace = () => {
  return (
    <div className="myspaceHolder">
      <Helmet>
        <title>LM | LindsSpace</title>
      </Helmet>
      <section className="myspace flip">
        <div className="myspace__left">
          <User />
          <Contact />
          <div className="mobile-only">
            <Blurbs />
          </div>
          <div className="myspace__url desktop-only mb-3 mx-3">
            <p className="m-0"><b>Myspace Url:</b></p>
            <p className="pl-2 m-0">http://www.lindsaymulholen.com/myspace</p>
          </div>
          <Interests />
          <Details />
          <Schools />
        </div>
        <div className="myspace__right px-4">
          <div className="desktop-only">
            <Status />
          </div>
          <div className="desktop-only">
            <Blurbs />
          </div>
          <Top8 />
          <Comments />
        </div>
      </section>
    </div>
  );
}

export default Myspace;


