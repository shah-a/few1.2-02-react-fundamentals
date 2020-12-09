// import React from 'react';
import './POPOSDetails.css';
import POPOSFeatureList from '../POPOSFeatures/POPOSFeatureList.js';
import data from '../../sfpopos-data.js';

function POPOSDetails (props) {
  const { id } = props.match.params;
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="" />
      </div>

      <div className="info">
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
        <p className="hours">{hours}</p>
        <p><POPOSFeatureList features={features} /></p>
        <p className="geo">{geo.lat} {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
