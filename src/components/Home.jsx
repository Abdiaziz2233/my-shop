import React from 'react'
import { Link } from 'react-router-dom';

function Home({items}) {
  
  return (
    <div className='home'>
      {items.map(item => (
        <Link className='one-item' key={item.id} to={`/items/${item.id}`}>
            <img src={item.image_url} alt="" />
            <div className='price-name'>
                <h3>{item.name}</h3>
                <p>Ksh {item.price}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Home
