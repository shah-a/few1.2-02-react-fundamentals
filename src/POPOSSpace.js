// import React from 'react';
// import logo from './logo.svg';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address } = props;
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
        alt={image}
        width="300"
        height="300"
      />
      <div>{address}</div>
    </div>
  );
}

export default POPOSSpace;
