import React from 'react';
import AI from '../../img/ArtInvestigator/mainsquare.jpg';
import CanvasImg from '../../img/Canvas/Canvas.png';
import EverythingHappens from '../../img/EverythingHappens/EHsquare.jpg';
import Hstream from '../../img/hStreamStore/CovidBannerLaptop.png';
import { Link } from 'react-router-dom';

const Top8 = () => {
  return (
    <div className="myspace__blurbs mb-4">
      <h3 className="m-0 mb-3 p-1 px-3 w-100 d-flex justify-content-between align-items-center">
        Lindsay's Friend Space (Top 4)
        <Link to="/Portfolio">[view all]</Link>  
      </h3>
      <div className="pl-3">
        <p><b>Lindsay has
        <b className="text-danger"> 4 </b>
        projects.</b></p>
      </div>
      <div className="px-3 d-flex w-100 myspace__blurbs--topdiv justify-content-between">
        <Link to="/HstreamStore" className="mr-3 d-flex flex-column justify-content-center align-items-center">
          <h4>hStream Store</h4>
          <img src={Hstream} alt="Laptop computer opened to a healthcare education marketplace website with a banner for covid education" />
        </Link>
        <Link to="/ArtInvestigator" className="mr-3 d-flex flex-column justify-content-center align-items-center">
          <h4>Art Investigator</h4>
          <img src={AI} alt="iPad view of Art Investigator App home page with aligator illustration and buttons to get started" />
        </Link>
        <Link to="/Canvas" className="mr-3 d-flex flex-column justify-content-center align-items-center">
          <h4>Canvas</h4>
          <img src={CanvasImg} alt="graphic of painters pallet with the word canvas" />
        </Link>
        <Link to="/EverythingHappens" className="d-flex flex-column justify-content-center align-items-center">
          <h4>hStream Store</h4>
          <img src={EverythingHappens} alt="Modern dancer in standing position with arms bent and raised, seated dancers and projections screens in background." />
        </Link>
      </div>
    </div>
  );
}

export default Top8;


