// import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import POPOSList from './POPOSList.js';
import Footer from './Footer.js';
import About from './About.js';
import POPOSDetails from './POPOSDetails.js';

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
