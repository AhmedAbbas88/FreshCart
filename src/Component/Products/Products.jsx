import React from 'react'
import style from './Products.module.css'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, increaseByAmount } from '../../Redux/CounterSlide'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'



export default function Products() {
  


  
  return <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Products</title>
  </Helmet>


  
  <FeaturedProducts/>
  </>
}