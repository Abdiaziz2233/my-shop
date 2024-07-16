import React, { useEffect, useState } from 'react';

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

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className='cart'>
      {/* <h2 style={{textAlign: "center"}}>Shopping Cart</h2> */}

      <div id='table-header'>
        <p style={{width: "32%", border: "none"}}>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
        <p>REMOVE</p>
      </div>


      {cartItems.map((item) => (
        <div key={item.id} className='cart-item'>
          <img src={item.image_url} alt={item.name} />
          <div className='item-details'>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: Ksh {item.price}</p>
          </div>
        </div>
      ))}
            <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
