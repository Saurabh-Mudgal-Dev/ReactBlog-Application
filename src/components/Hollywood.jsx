import React from 'react';
import Data from '../Data';
import { Link } from 'react-router-dom';

const Hollywood = () => {
  const HollywoodData = Data.filter((item) => item.category === "Hollywood");

  return (
    <div>
      {HollywoodData.map((hollydata) => (
        <div key={hollydata.id}>
          <Link to={`/details/${hollydata.id}`}>
          <h1>{hollydata.title}</h1>
          <img src={hollydata.img_url} alt={hollydata.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Hollywood