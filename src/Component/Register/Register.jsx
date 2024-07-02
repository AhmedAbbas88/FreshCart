import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {
  const [loading, setloading] = useState(false)
  const [apiError, setApiError] = useState(null)
  let navigate = useNavigate()
  
  async function registerSubmit(values){
    setloading(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)
    .catch((err)=>{
      setApiError(err.response.data.message)
      setloading(false)
    })
    if (data.message == 'success') {
        setloading(false)
        navigate('/login')
    }
  }

  let validationSchema = Yup.object({
    name : Yup.string().required('Name is required').min(3 , 'min length is 3').max(10 ,  'mix length is 10'),
    email : Yup.string().required('Email is Required').email('Invalid Email'),
    password : Yup.string().required('password is required').matches(/^[A-Z][\w@]{5,8}$/ , 'invalid password ex(Ahmed@123)'),
    rePassword : Yup.string().required('repassword is required').oneOf([Yup.ref('password')] , 'password & repassword dont match'),
    phone : Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/ , ' we need egyption number')
  })

    let formik = useFormik({
      initialValues:{
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
      },validationSchema
      ,onSubmit: registerSubmit

    })


      

  return <>
    <div className='w-75 mx-auto py-4'>
      <h2>Register Now</h2>

      <form onSubmit={formik.handleSubmit}>

        {apiError ? <div className="alert alert-danger">{apiError}</div> : ''}

        <label className='py-2' htmlFor="name">Name: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='name' name='name' className='form-control mb-3' />
        
        {formik.errors.name && formik.touched.name? <div className='alert alert-danger py-2'>{formik.errors.name}</div> : null}

        <label className='py-2' htmlFor="email">Email: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name='email' className='form-control mb-3' />

        {formik.errors.email && formik.touched.email? <div className='alert alert-danger py-2'>{formik.errors.email}</div> : null}

        <label className='py-2' htmlFor="password">Password: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className='form-control mb-3' />
        
        {formik.errors.password && formik.touched.password? <div className='alert alert-danger py-2'>{formik.errors.password}</div> : null}

        <label className='py-2' htmlFor="rePassword">rePassword: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='repassword' name='rePassword' className='form-control mb-3' />

        {formik.errors.rePassword && formik.touched.rePassword? <div className='alert alert-danger py-2'>{formik.errors.rePassword}</div> : null}

        <label className='py-2' htmlFor="phone">phone: </label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id='phone' name='phone' className='form-control mb-3' />

        {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger py-2'>{formik.errors.phone}</div> : null}

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
        </button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn text-light bg-main'>Register</button>}
        

        <span className='ps-4'>if you hava an Account <Link className='ps-4 text-primary' to={'/login'}>login Now</Link></span>

        
        

      </form>
    </div>

  </>
}