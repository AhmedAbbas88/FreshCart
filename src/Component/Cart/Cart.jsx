import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Cart() {

  let {getCartItems , deleteCartItems , updateCartItems} = useContext(CartContext);

  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getItems(){
    let {data} = await getCartItems()
    // console.log(data);
    setCart(data);
    setLoading(false)
  }

  async function deleteItem(id){
    setLoading(true)
    let {data} = await deleteCartItems(id)
    // console.log(data);
    setCart(data);
    setLoading(false)
  }
  async function updateCart(id , count){
   
    if (count < 1) {
      let {data} = await deleteCartItems(id)
      setCart(data);
    }else{
      let {data} = await updateCartItems(id , count)
      setCart(data);
    }

    
  }

  useEffect(()=>{
    getItems()
  } , [])
 
 
 return <>
 <Helmet>
    <meta charSet="utf-8" />
  <title>Cart</title>
  </Helmet>
 
  <div className='bg-main-light p-2 mt-5'>
  <h2>Cart</h2>

{loading? <div className="loading">
<BallTriangle
          height={100}
          width={100}
          radius={5}
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass="d-flex justify-content-center mt-5 text-main"
          visible={true}
      />
</div>  : cart? <>
<p className='text-main'>Number Of Cart Items: {cart.numOfCartItems}</p>
<p className='text-main'>Total Cart Price: {cart.data.totalCartPrice} EGP</p>
{cart.data.products.map(product => <div key={product.product.id} className="row align-items-center p-2 border-1 border-bottom m-0">
  <div className="col-md-1">
    <div className="img">
      <img src={product.product.imageCover} className='w-100' alt={product.product.title} />
    </div>
  </div>
 
  <div className="col-md-10">
    <div className="item">
      <h3 className='h5 fw-bold'>{product.product.title.split(' ').slice(0,3).join(' ')}</h3>
      <p className='text-main fw-bold'>Price : {product.price} EGP</p>
      <button onClick={()=>deleteItem(product.product.id)} className='btn text-danger'> <i className='fas fa-trash-can'></i> Remove</button>
    </div>
  </div>

  <div className="col-md-1">
    <div className="count">
      <button onClick={()=>updateCart(product.product.id , product.count - 1)} className='btn brdr p-1'>-</button>
      <span className='mx-2'>{product.count}</span>
      <button onClick={()=>updateCart(product.product.id , product.count + 1)} className='btn brdr p-1'>+</button>

    </div>
  </div>
</div>)}
  <Link to={`/shippingaddress/${cart.data._id}`} className='btn bg-main text-light m-3'>Online Payment</Link>
</> : <h2 className='fw-bold'>Youre Cart is Empty .......</h2> }
  </div>
  
  </>
}