import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Food = () => {
  const FoodData = Data.filter((item) => item.category === "Food");

  return (
    <div>
      {FoodData.map((fooddata) => (
        <div key={fooddata.id}>
          <Link to={`/details/${fooddata.id}`}>
          <h1>{fooddata.title}</h1>
          <img src={fooddata.img_url} alt={fooddata.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Food