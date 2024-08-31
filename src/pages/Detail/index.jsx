import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';

const Detail = () => {
    const {id} =useParams();
    const [category,setCategory]=useState();
    useEffect(()=>{
        fetch(`https://northwind.vercel.app/api/categories/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
          setCategory(data)
        })
    },[])
  return (
    <div>
      <Helmet>
        <title>Detail page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Detail Page</h1>
      {category && <>
        <div className="card">
        <h3>Id: {category?.id}</h3>
        <p>Name:{category?.name}</p>
        <p>Deacription: {category?.description}</p>
      </div>
    <Link to={"/"}>
    <button>GO BACK</button>
    </Link>  
      </>}
     

    </div>
  )
}

export default Detail
