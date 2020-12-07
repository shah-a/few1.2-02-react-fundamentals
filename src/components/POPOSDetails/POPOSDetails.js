// import React from 'react';
import './POPOSDetails.css';
import data from '../../sfpopos-data.json';

function POPOSDetails (props) {
  const { id } = props.match.params;
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="" />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
