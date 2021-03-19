import React from 'react';
import MinimalPortfolio from '../shared/MinimalPortfolio';
import H1New from '../shared/H1';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lindsay Mulhollen</title>
      </Helmet>
      <H1New />
      <MinimalPortfolio />
    </div>
  );
}

export default Home;


