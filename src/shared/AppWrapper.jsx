import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const AppWrapper = props => {
  const { children } = props;

  return (
    <div>
      <header>
       <Nav/>
      </header>
      <main className="app__main" id="main">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default AppWrapper;
