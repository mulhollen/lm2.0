import React from 'react';
import hslogo from "../../img/hssquare.jpeg"

const Comments = () => {
  return (
    <div className="myspace__blurbs mb-4">
      <h3 className="m-0 mb-3 p-1 px-3 w-100 d-flex justify-content-between align-items-center">
        Lindsay's Friends Comments
      </h3>
      <div className="pl-3 myspace__blurbs--shortLineHeight">
        <p><b>Displaying
        <b className="text-danger"> 1 </b>
        of
        <b className="text-danger"> 1 </b>
        comments (
        <a href="www.linkedin.com/in/mulhollen/"> View All </a>
        |
        <a href={`mailto:lindsaymulhollen@gmail.com`}> Add Comment </a>
        )</b></p>
      </div>
      <div className="px-3 d-flex flex-column w-100 myspace__blurbs--topdiv justify-content-between">
        
        <div className="d-flex myspace__blurbs--comment mb-1 flip-small">
          <div className="p-1 mr-1 d-flex flex-column align-items-center">
            <a href="www.melissarobertson.com" traget="_blank" className="friendLink">
              <h4>Melissa Robertson,<br/>HealthStream Colleague</h4>
              <img className="mb-1" src="https://melissarobertson.com/img/Wheatley_Headshot2018.jpg" alt=" " />
            </a> 
          </div>
          <div className="p-1">
            <p className="font-weight-bold">April 2021</p>
            <p>
              Lindsay takes challenges and crushes them, showing an ability to rapidly level up and adapt that is inspiring. As we've worked together, I've come to view her as a trusted resource whether I'm looking for someone to work through code with or a sounding board while thinking through a design. Her leadership capabilities shine when she is given opportunities to share knowledge and her enthusiasm is contagious. She is truly an asset for any team!
            </p>
          </div>
        </div>
        <div className="d-flex myspace__blurbs--comment mb-1 flip-small">
          <div className="p-1 mr-1 d-flex flex-column align-items-center">
            <h4>HealthStream Colleague</h4>
            <img className="m-1" src={hslogo} alt=" " />
          </div>
          <div className="p-1">
            <p className="font-weight-bold">April 2020</p>
            <p>Thanks for crossing the aisle and inspiring me to Stream Good. You gave me the most energetic welcome and introduction that I've had since I've been here. By far the best interaction that I've had!</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Comments;

