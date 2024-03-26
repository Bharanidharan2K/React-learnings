import './App.css';
import FrozenDept from './components/ForzenDept';
import MeatDept from './components/MeatDept';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='' component={Navbar}/>
        <Route path='/frozen' component={FrozenDept} />
        <Route path='/meat' component={MeatDept} />
      </div>
    </Router>
  ); 
}

export default App;
