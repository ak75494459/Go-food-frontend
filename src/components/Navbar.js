import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Cart from './Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const data = useCart();
const [cartView , setCartView] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontFamily:"cursive",fontWeight:"bold"}}>
        <div className="container-fluid">
          <Link style={{fontSize:"30px"}} className="navbar-brand" to="/">GoFood</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myorder">My Order</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">signup</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <button type="button" className="btn btn-primary mx-3" style={{width:"8rem"}} onClick={()=>{setCartView(true)}}>my Cart {data.length}</button>
        </div>
        {cartView ? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
      </nav>
    </>
  )
}