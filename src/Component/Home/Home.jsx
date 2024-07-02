import React, { useContext, useState } from 'react'
import { CounterContext } from '../../Context/CounterContext'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import MainSlider from '../MainSlider/MainSlider'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import { Helmet } from 'react-helmet'





export default function Home() {
  

  return <>

  <Helmet>
    <meta charSet="utf-8" />
    <title>Fresh Cart</title>
  </Helmet>    
    
    <MainSlider/>
    <CategoriesSlider/>
    <FeaturedProducts/>
  </>
}