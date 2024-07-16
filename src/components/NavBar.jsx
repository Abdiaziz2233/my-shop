import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <div id='logo-div'>
        <Link to={"/"} >
          <img src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_retina_2000.jpg?1649155356" alt="" />
        </Link>
      </div>



      <div className='cart-section'>
        {/* <Link className='cart-div' to={"/phone"}>
          <TfiHeadphoneAlt />
          <p>Phone</p>
        </Link> */}
        <Link className='cart-div' to={"/cart"}>
          <AiOutlineShoppingCart className='cart-icon' />
          <p>Cart</p>
        </Link>
        
        <Link className='cart-div' to={"/account"}>
          <VscAccount className='cart-icon' />
          <p>Account</p>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
