import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleItem({ items }) {
  const { id } = useParams();
  
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (items && items.length > 0) {
      const foundElement = items.find(item => item.id === parseInt(id));
      setElement(foundElement);
    }
  }, [items, id]);

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
            <button>-</button>
            <button id='center-btn-num'>1</button>
            <button>+</button>
          </div>
          <button id='add-to-cart-btn'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem
