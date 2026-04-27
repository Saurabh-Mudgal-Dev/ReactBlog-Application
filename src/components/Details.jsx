import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
    const {id} = useParams()
    const post = Data.find((item) => item.id === parseInt(id))
    const navigate = useNavigate()

    if (!post){
        alert("post ot found")
    }

  return (<>
  <button onClick={()=>navigate(-1)}>Back</button>
    <div>Details</div>

    <h1>{post.title}</h1>
    <img src={post.img_url} alt="" />
    <p>{post.description}</p>
</>
  )
}

export default Details/