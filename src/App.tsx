import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from './components/pages/Login/Login';
import { Home } from './components/pages/Home/Home';
// import { Router } from '../node_modules/@types/react-router';


class App extends React.Component {
  public state = {
    text : ''
  };
  
  // public componentDidMount() {

  // }
  
  
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
