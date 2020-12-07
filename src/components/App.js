import './App.css';
import Title from './Title/Title.js';
import POPOSList from './POPOSList/POPOSList.js';
import Footer from './Footer/Footer.js';
import About from './About/About.js';
import POPOSDetails from './POPOSDetails/POPOSDetails.js';

import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
