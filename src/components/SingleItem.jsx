import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleItem({ items }) {
  const { id } = useParams();

  const [element, setElement] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      const foundElement = items.find(item => item.id === parseInt(id));
      setElement(foundElement);
    }
  }, [items, id]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = () => {
    if (element) {
      const existingItemIndex = cartItems.findIndex(item => item.id === element.id);
      let updatedCart;
      if (existingItemIndex >= 0) {
        updatedCart = cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...cartItems, { ...element, quantity }];
      }
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  if (!element) {
    return <div>Loading...</div>
  }

  return (
    <div className='single-item'>
      <div className='item-image'>
        <img src={element.image_url} alt={element.name} />
      </div>
      <div className='description-details'>
        <h2 id='element-name'>{element.name}</h2>
        <p id='element-price'>Ksh {element.price}</p>
        <p id='element-descr'>{element.description}</p>
        <div className='add-cart-buttons'>
          <div className='arithmetic-btns'>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <button id='center-btn-num'>{quantity}</button>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button id='add-to-cart-btn' onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
