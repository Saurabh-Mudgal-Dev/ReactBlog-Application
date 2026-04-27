import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Technology = () => {
  const TechData = Data.filter((item) => item.category === "Technology");

  return (
    <div>
      {TechData.map((techdata) => (
        <div key={techdata.id}>
          <Link to={`/details/${techdata.id}`}>
          <h1>{techdata.title}</h1>
          <img src={techdata.img_url} alt={techdata.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Technology