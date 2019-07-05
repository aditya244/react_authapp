import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {NavLink, Route} from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="app_div">
          </div>
          <div className="form_div">
            <div className="nav_items">
              <NavLink exact to = "/" activeClassName = "button_active" className="sign_in">Sign In </NavLink>
              <NavLink to ="/sign-up" activeClassName = "button_active" className="sign_up">Sign Up </NavLink>

              <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
