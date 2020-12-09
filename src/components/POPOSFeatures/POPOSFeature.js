import './POPOSFeature.css';

function getFeatureEmoji(feature) {
  switch(feature) {
    case 'outdoors':
      return '🌲'
    case 'coffee':
      return '☕️'
    case 'art':
      return '🖼'
    case 'toilet':
      return '🚽'
    case 'power':
      return '🔌'
    default:
      return ''
  }
}

function POPOSFeature(props) {
  const emoji = getFeatureEmoji(props.feature);
return (
  <div className="POPOSFeature">
    {emoji}
  </div>
  );
}

export default POPOSFeature;
