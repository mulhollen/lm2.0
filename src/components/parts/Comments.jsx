import React from 'react';

const Comments = () => {
  return (
    <div className="myspace__blurbs mb-4">
      <h3 className="m-0 mb-3 p-1 px-3 w-100 d-flex justify-content-between align-items-center">
        Lindsay's Friends Comments
      </h3>
      <div className="pl-3 myspace__blurbs--shortLineHeight">
        <p><b>Displaying
        <b className="text-danger"> X </b>
        of
        <b className="text-danger"> X </b>
        comments (
        <a href="www.linkedin.com/in/mulhollen/"> View All </a>
        |
        <a href={`mailto:lindsaymulhollen@gmail.com`}> Add Comment </a>
        )</b></p>
      </div>
      <div className="px-3 d-flex w-100 myspace__blurbs--topdiv justify-content-between">
        <div className="d-flex myspace__blurbs--comment mb-1 ">
          <div className="p-1 mr-1 d-flex flex-column align-items-center">
            <h4>hStream Store</h4>
            <img src=""alt=" " />
          </div>
          <div className="p-1">
            <p className="font-weight-bold">3 minutes ago</p>
            <p>I’m conflicted on that. Conceptually, it shouldn’t be. But in reality marketing depts will always want stuff stuck to the window so it would be easier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;


