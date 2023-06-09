import React from 'react';

function Card(props) {
  return (
    <div className='col mt-5'>
      <div className="card" style={{ width: '22rem' }}>
        <img src={props.src} className="card-img-top" alt={props.src} />
      </div>
    </div>
  );
}

export default Card;