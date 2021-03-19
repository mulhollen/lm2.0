import React from 'react';

const Content = () => {
  const sadface = ":(";
  return (
    <div className="myspace__contact mb-4 mx-3">
      <h3 className="mb-0 pt-1 text-light">Contacting Lindsay</h3>
      <div className="d-flex px-2">
        <div className="d-flex flex-column w-50">
          <a href={`mailto:lindsaymulhollen@gmail.com`} className="pb-1">Send Message</a>
          <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" rel="noreferrer" className="pb-1">Add to Friends</a>
          <a href={`mailto:lindsaymulhollen@gmail.com`} className="pb-1">Instant Message</a>
          <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" rel="noreferrer" className="pb-1">Add to Group</a>
        </div>
        <div className="d-flex flex-column w-50">
          <button className="pb-1" onClick={() => {navigator.clipboard.writeText("lindsaymulhollen.com")}}>Forward to Friend</button>
          <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" rel="noreferrer" className="pb-1">Add to Favorites</a>
          <button className="pb-1" onClick={() => {alert(`${sadface}`)}}>Block User</button>
          <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" rel="noreferrer" className="pb-1">Rank User</a>
        </div>
      </div>
    </div>
  );
}

export default Content;


