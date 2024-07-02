import React, { useContext, useState } from 'react'
import style from './Login.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export default function Login() {
  const [loading, setloading] = useState(false)
  const [apiError, setApiError] = useState(null)
  let navigate = useNavigate()
  let {setUserToken} = useContext(UserContext)
  
  async function loginSubmit(values){
    setloading(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values)
    .catch((err)=>{
      setApiError(err.response.data.message)
      setloading(false)
    })
    if (data.message == 'success') {
        setloading(false)
        localStorage.setItem('userToken' , data.token)
        setUserToken(data.token)
        navigate('/')
    }
  }

  let validationSchema = Yup.object({
    email : Yup.string().required('Email is Required').email('Invalid Email'),
    password : Yup.string().required('password is required').matches(/^[A-Z][\w@]{5,8}$/ , 'invalid password ex(Ahmed@123)'),
  })

    let formik = useFormik({
      initialValues:{
        email: '',
        password: '',
        
      },validationSchema
      ,onSubmit: loginSubmit

    })


    return <>
    <div className='w-75 mx-auto py-4'>
      <h2>login Now</h2>

      <form onSubmit={formik.handleSubmit}>

        {apiError ? <div className="alert alert-danger">{apiError}</div> : ''}



        <label className='py-2' htmlFor="email">Email: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name='email' className='form-control mb-3' />

        {formik.errors.email && formik.touched.email? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}

        <label className='py-2' htmlFor="password">Password: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className='form-control mb-3' />
        
        {formik.errors.password && formik.touched.password? <div className='alert alert-danger py-2'>{formik.errors.password}</div> : null}



        {loading? <button type='button' className='btn text-light bg-main'>
        <BallTriangle
            height={25}
            width={25}
            radius={5}
            color="#fff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn text-light bg-main'>login</button>}
        <Link className='ps-4 text-primary' to={'/register'}>Create new account</Link>
        
        

      </form>
    </div>

  </>
}


