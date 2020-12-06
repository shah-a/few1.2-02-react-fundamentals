import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import './Title.css';

function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
