import React from 'react';
import Data from '../Data';
import { Link } from 'react-router-dom';

const Bollywood = () => {
  const BollywoodData = Data.filter((item) => item.category === "Bollywood");

  return (
    <div>
      {BollywoodData.map((bollydata) => (
        <div key={bollydata.id}>
          <Link to={`/details/${bollydata.id}`}>
          <h1>{bollydata.title}</h1>
          <img src={bollydata.img_url} alt={bollydata.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bollywood;