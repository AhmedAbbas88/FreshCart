import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  

<footer class="text-center text-lg-start bg-body-tertiary text-muted mt-5 ">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    

    
    <div>
      <a target='_blank' href="https://www.facebook.com/" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a target='_blank' href="https://x.com/?lang=ar" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a target='_blank' href="https://www.google.com.eg/?hl=ar" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a target='_blank' href="https://www.instagram.com/" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a target='_blank' href="https://www.linkedin.com/" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a target='_blank' href="https://github.com/" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  

  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Fresh Cart
          </h6>
          <p>
          Enjoy your journey while shopping with our products
          </p>
        </div>
        

        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Categories
          </h6>
          <p>
            <a href="#!" class="text-reset">Men Fashion</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Women Fashion</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Electronics</a>
          </p>
          <p>
            <a href="/" class="text-reset">Home</a>
          </p>
        </div>
        

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="http://localhost:3000/cart" class="text-reset">Cart</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        

        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Egypt, Cairo, Eg</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            freshcart@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +2 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> +2 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>

  <div class="text-center p-4">
    © 2024 Copyright:
    <a target='_blank' class="text-reset fw-bold" href="/"> FreshCart.com</a>
  </div>




</footer>

  
  </>
}