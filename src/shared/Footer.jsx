import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between">
      <p className="sans m-5">&copy; lindsay mulhollen 2018 - {new Date().getFullYear()}</p>
      <Link className="sans m-5" to="/Myspace">pimp my profile.</Link>
    </footer>
  );
}

export default Footer;



