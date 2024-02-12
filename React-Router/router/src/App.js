import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';

const Host = () => <h1>Become a host</h1>
const SignUp = () => <h1>Sign Up</h1>
const LogIn = () => <h1>LogIn</h1>

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" render={(props) =>{
        return <Home title="Hello this is Home" history={props.history}/>
      }
      }/>
      <Route exact path="/host" component={Host}/>
      <Route path="/help" component={Help}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/login" component={LogIn}/>
    </Router>
  );
}

export default App;
