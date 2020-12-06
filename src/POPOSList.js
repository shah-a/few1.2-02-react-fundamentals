// import React from 'react';
import POPOSSpace from './POPOSSpace.js';
import './POPOSList.css';

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        image="50-california-st.jpg"
        address="50 California St."
      />
      <POPOSSpace
        name="100 Pine"
        image="100-pine.jpg"
        address="100 Pine St."
        />
      <POPOSSpace
        name="101 California"
        image="101-california.jpg"
        address="101 California St."
        />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        image="343-sansome-roof-garden.jpg"
        address="343 Sansome St."
        />
      <POPOSSpace
        name="525 Market Plaza"
        image="525-market-street-plaza.jpg"
        address="525 Market St."
        />
      <POPOSSpace
        name="555 California"
        image="555-california.jpg"
        address="555 California St."
        />
      <POPOSSpace
        name="Citigroup Center"
        image="citigroup-center.jpg"
        address="1 Sansome St."
        />
      <POPOSSpace
        name="Embarcadero Center"
        image="embarcadero-center.jpg"
        address="400-492 Commercial St."
        />
      <POPOSSpace
        name="Empire Park"
        image="empire-park.jpg"
        address="648 Commercial St."
        />
      <POPOSSpace
        name="150 California Garden Terrace"
        image="garden-terrace-at-150-california.jpg"
        address="150 California St."
        />
      <POPOSSpace
        name="Transamerica Redwood Park"
        image="transamerica-redwood-park.jpg"
        address="600 Montgomery St."
      />
    </div>
  );
}

export default POPOSList;
