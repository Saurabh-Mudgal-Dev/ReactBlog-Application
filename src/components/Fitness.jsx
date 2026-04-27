import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === "Fitness");

  return (
    <div>
      {FitnessData.map((fitnessdata) => (
        <div key={fitnessdata.id}>
          <Link to={`/details/${fitnessdata.id}`}>
          <h1>{fitnessdata.title}</h1>
          <img src={fitnessdata.img_url} alt={fitnessdata.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Fitness