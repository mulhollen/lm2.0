import React from 'react';
import littleLinds from '../img/LittleLinds.png'

const H1New = () => {
  return (
    <section className="section_h1">
      <div className="decorativeH1">
        <h1>Lindsay Mulhollen is a Front-end Developer specializing in React.</h1>
        <h2>She's intersted in what makes a good user experience and accessibility. In her spare time she does ballet, designs interiors for herself and friends, and drinks a lot of iced coffee.</h2>
      </div>
      <div  className="mobileOnly">
        <img src={littleLinds} alt="Lindsay as a small child lounging in front of a toy computer" />
      </div>
    </section>
  );
}


export default H1New;
