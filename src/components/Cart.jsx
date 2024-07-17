import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className='cart'>
      <h2 style={{textAlign: "center", margin: "36px 0"}}>Shopping Cart</h2>

      <div id='table-header'>
        <p style={{width: "32%", border: "none"}}>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
        <p>REMOVE</p>
      </div>


      {cartItems.map((item) => (
        <div key={item.id} className='cart-item'>
          <div style={{width: "12%"}}>
            <img style={{width: "60%"}} src={item.image_url} alt={item.name} />
          </div>

          <div style={{width: "20%"}} className='cart-item-sub-divs'>
            <p>{item.name}</p>
          </div>

          <div className='item-table-colums cart-item-sub-divs'>
            <p>Ksh: {item.price}</p>
          </div>

          <div className='item-table-colums cart-item-sub-divs'>
            <div className='quantity-buttons'>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button style={{borderLeft: "1px solid #dddddd", borderRight: "1px solid #dddddd"}}>{item.quantity}</button>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
          </div>

          <div className='item-table-colums cart-item-sub-divs'>
            <p>{item.price * item.quantity}</p>
          </div>

          <div className='item-table-colums cart-item-sub-divs'>
          <AiOutlineCloseCircle onClick={() => removeFromCart(item.id)} id='remove-item'/>
          </div>
        </div>
      ))}

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
