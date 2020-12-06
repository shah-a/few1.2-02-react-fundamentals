// import React from 'react';
// import logo from './logo.svg';
import './POPOSSpace.css';
import {Link} from 'react-router-dom';

function POPOSSpace(props) {
  const { id, name, image, address, hours } = props;
  return (
    <div className="POPOSSpace">
      <Link className="Link" to={`details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <Link to={`details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`}
          alt={image}
          width="300"
          height="300"
        />
      </Link>
      <p>{address}</p>
      <p>{hours}</p>
    </div>
  );
}

export default POPOSSpace;
