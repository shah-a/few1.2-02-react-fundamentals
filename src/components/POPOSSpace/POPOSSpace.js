// import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
  const { id, name, image, address, hours } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`}
          alt={image}
          width="300"
          height="300"
        />
      </Link>
      <Link className="Link title" to={`details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div className="info">
        <div><p>{address}</p></div><br/>
        <div><p>{hours ? hours : "⌛️⏳"}</p></div>
      </div>
    </div>
  );
}

export default POPOSSpace;
