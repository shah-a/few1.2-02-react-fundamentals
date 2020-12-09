import './POPOSFeatureList.css';
import POPOSFeature from './POPOSFeature.js';

function POPOSFeatureList(props) {
  const icons = props.features.map(feature => {
    return (
      <POPOSFeature
        key={feature}
        feature={feature}
      />
    );
  });

  return (
    <div className="POPOSFeatureList">
      {icons}
    </div>
  );
}

export default POPOSFeatureList
