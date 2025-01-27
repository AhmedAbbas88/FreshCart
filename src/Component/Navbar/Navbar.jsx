import React, { useContext } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // let {count} = useContext(CounterContext)

  let { count } = useSelector(({counter})=> counter)

  let {userToken , setUserToken} = useContext(UserContext)
  let navigate = useNavigate()
  function logOut(){
    localStorage.removeItem('userToken')
    setUserToken(null);
    navigate('/login')
  }

 
 return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div className="container-fluid">
    <Link className="navbar-brand"to={'/'}>
      <img src={logo} alt="Fresh Cart" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {userToken != null?<>
            <li className="nav-item">
             <Link className="nav-link" to={'/'}>Home </Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'cart'}>Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'products'}>Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'categories'}>Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'brands'}>Brands</Link>
          </li>
        </>:''}
        
        
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
          <a target='_blank' href="https://www.facebook.com/"><i className='fab fa-facebook me-2'></i></a> 
          <a target='_blank' href="https://x.com/?lang=ar"><i className='fab fa-twitter me-2'></i></a> 
          <a target='_blank' href="https://www.instagram.com/"><i className='fab fa-instagram me-2'></i></a> 
          <a target='_blank' href="https://www.youtube.com/"><i className='fab fa-youtube me-2'></i></a> 
          
        </li>

          {userToken != null ? <>
                <li className="nav-item">
              <span onClick={logOut} className="nav-link cursor-pointer" to={'logout'}>Logout</span>
            </li> 
          </>: 
          <>
              <li className="nav-item">
              <Link className="nav-link" to={'register'}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'login'}>Login</Link>
            </li>
          </>}

        
        
        
        
        
        
      </ul>
    </div>
  </div>
</nav>
  
  </>
}