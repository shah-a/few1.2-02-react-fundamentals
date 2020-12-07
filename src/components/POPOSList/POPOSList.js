// import React from 'react';
import './POPOSList.css';
import POPOSSpace from '../POPOSSpace/POPOSSpace.js';
import data from '../../sfpopos-data.json';

function POPOSList() {
  const spaces = data.map(({ title, images, address, hours }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={title}
        name={title}
        image={images[0]}
        address={address}
        hours={hours}
      />
    );
  });

  return (
    <div className="POPOSList">
      {spaces}
    </div>
  );
}

export default POPOSList;
