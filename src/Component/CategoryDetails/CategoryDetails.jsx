
import style from './CategoryDetails.module.css'

import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function CategoryDetails() {



  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  let {id} = useParams()

  async function getCategoryDetails(id) {
    let {data} = await axios(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    setDetails(data.data)
    setLoading(false)
  }
  useEffect(()=>{
    getCategoryDetails(id)
  } , [])

  return <>


  {loading? 
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
    :

      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{details.name}</title>
        </Helmet>

        
<div className="row align-items-center">




  <div className="col-md-4">
    <img className='w-100' src={details.image} alt={details.name} />
    
  </div>

  <div className="col-md-4">
    <div className="details">
      <span className='font-sm text-main '>{details.name}</span>
      <h3 className='h5 pt-1'>{details.slug}</h3>
    </div>

  </div>

  
</div>


      </>

  }
  
  </>
}