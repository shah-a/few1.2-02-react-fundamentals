import './POPOSRandom.css';
import { useHistory } from 'react-router-dom';
import data from '../../sfpopos-data.js';

function POPOSRandom() {
  const history = useHistory();
  return (
    <button
      className="POPOSRandom"
      onClick={e => {
      const index = Math.floor(Math.random() * (data.length - 1));
      history.push(`/details/${index}`);
    }
    }>Show me a random space!</button>
  );
}

export default POPOSRandom
