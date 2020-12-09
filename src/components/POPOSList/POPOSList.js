// import React from 'react';
import { useState } from 'react';
import './POPOSList.css';
import POPOSSpace from '../POPOSSpace/POPOSSpace.js';
import data from '../../sfpopos-data.js';

function POPOSList() {
  const [query, setQuery] = useState('');

  let spaces = data.filter(space => {
    const inTitle = space.title.toLowerCase().includes(query.toLowerCase());
    const inAddress = space.address.toLowerCase().includes(query.toLowerCase());
    return inTitle || inAddress;
  });

  spaces = spaces.map(space => {
    return (
      <POPOSSpace
        key={space.id}
        id={space.id}
        name={space.title}
        image={space.images[0]}
        address={space.address}
        hours={space.hours}
      />
    );
  });

  return (
    <div className="POPOSList">
      <div className="form">
        <form>
          <input
            value={query}
            placeholder="search"
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="grid">
        {spaces}
      </div>
    </div>
  );
}

export default POPOSList;
