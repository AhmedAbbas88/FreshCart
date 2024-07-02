import React from 'react'
import style from './Categories.module.css'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

export default function Categories() {

  function getCategories (){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  let {data , isLoading , isError , isFetching , refetch} =  useQuery('categories', getCategories , {

  });

  return <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Categories</title>
  </Helmet>
  <h2>Categories</h2>


  {isLoading? 
    <div className='loading'>
      <BallTriangle
            height={100}
            width={100}
            radius={5}
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center mt-5 text-main"
            visible={true}
        />
    </div>
    : <div className="row gy-4">
      {data?.data.data.map(category =>
        <div key={category._id} className="col-lg-3">

        <div  className="product p-2 ">
          <Link to = {`/categorydetails/${category._id}`}>
          <img className='w-100 height' src={category.image}  alt={category.name} />
            <span className='font-sm text-main'>{category.name}</span>
            <h3 className='h5'>{category.name}</h3>
          </Link>
  
        </div>
          

        </div>
        )}
    </div>
    
    }
  
  </>
}