import React, { Suspense, useContext, useEffect } from 'react'
import Cart from './Component/Cart/Cart'
import Layout from './Component/Layout/Layout'
// import Brands from './Component/Brands/Brands'
// import Categories from './Component/Categories/Categories'
import Products from './Component/Products/Products'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import Home from './Component/Home/Home'
import NotFound from './Component/NotFound/NotFound'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CounterContextProvider, { CounterContext } from './Context/CounterContext'
import UserContextProvider, { UserContext } from './Context/UserContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Component/ProductDetails/ProductDetails'

import { Toaster } from 'react-hot-toast'

import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import ShippingAddress from './Component/ShippingAddress/ShippingAddress'
import AllOrders from './Component/AllOrders/AllOrders'
import CategoryDetails from './Component/CategoryDetails/CategoryDetails.jsx'

const Categories = React.lazy(()=> import('./Component/Categories/Categories.jsx'))
const Brands = React.lazy(()=> import('./Component/Brands/Brands.jsx'))





export default function App() {

let routers = createBrowserRouter([
  {path: '' , element : <Layout/> ,children: [
    {index: true , element : <ProtectedRoute><Home/></ProtectedRoute>},
    {path: 'cart' , element : <ProtectedRoute><Cart/></ProtectedRoute>},
    {path: 'products' , element : <ProtectedRoute><Products/></ProtectedRoute>},
    {path: 'productdetails/:id' , element : <ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path: 'categorydetails/:id' , element : <ProtectedRoute><CategoryDetails/></ProtectedRoute>},
    {path: 'categories' , element : <Suspense fallback={<div className='vh-100 bg-dark text-light'><i class="fa-solid fa-spinner"></i></div>}><ProtectedRoute><Categories/></ProtectedRoute></Suspense>},
    {path: 'shippingaddress/:cartId' , element : <ProtectedRoute><ShippingAddress/></ProtectedRoute>},
    {path: 'allorders' , element : <ProtectedRoute><AllOrders /></ProtectedRoute>},
    {path: 'brands' , element : <Suspense fallback={<div className='vh-100 bg-dark text-light'><i class="fa-solid fa-spinner"></i></div>}><ProtectedRoute><Brands/></ProtectedRoute></Suspense>},
    {path: 'register' , element : <Register/>},
    {path: 'login' , element : <Login/>},
    {path: 'freshcart' , element : <Home/>},
    {path: '*' , element : <NotFound/>},
  ]
 }
])
let {setUserToken} = useContext(UserContext)
useEffect(()=>{

  if (localStorage.getItem('userToken')) {
    setUserToken(localStorage.getItem('userToken'))
    
  }

}, [])


  return <>

    
    <CounterContextProvider>
      
      <Provider store={store}>

        <RouterProvider router={routers}></RouterProvider>
        <Toaster/>

      </Provider>
  
    </CounterContextProvider>
    
  </>
}
