import React from 'react';
import resume from '../img/LindsayMulhollenResume.png';
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <div>
      <Helmet>
        <title>LM | Resume</title>
      </Helmet>
        <div className="d-flex justify-content-center justify-content-start">
          <img src={resume} className="resumeWidth" alt="resume" />                
        </div>
    </div>
  );
}

export default Resume;







