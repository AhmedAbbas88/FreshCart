import React, { useContext } from 'react'
import style from './ShippingAddress.module.css'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ShippingAddress() {

  let {checkoutSession} = useContext(CartContext)

  let {cartId} = useParams()
  console.log(cartId);

  async function checkout(values){
    let {data} = await checkoutSession(cartId, values);
    console.log(data);
    if (data.status == 'success') {
      window.location.href = data.session.url
    }
  }

  let formik = useFormik({
    initialValues:{
      details:'',
      phone: '',
      city: '',
    }, onSubmit: checkout
  })

  return <>
  <h2>ShippingAddress</h2>
  <div className="w-75 mx-auto">
    <form className='mt-4' onSubmit={formik.handleSubmit}>
      
      <label htmlFor="details">details</label>
      <input onChange={formik.handleChange} type="text" id='details' name='details' className='form-control mb-3 mt-1' />
      
      <label htmlFor="phone">phone</label>
      <input onChange={formik.handleChange} type="tel" id='phone' name='phone' className='form-control mb-3 mt-1' />
      
      <label htmlFor="city">city</label>
      <input onChange={formik.handleChange} type="text" id='city' name='city' className='form-control mb-3 mt-1' />
      <button className='btn bg-main text-light' type='submit'>Checkout</button>
    </form>
  </div>
  
  </>
}