import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './views/User/Register/Register.jsx';
import Login from './views/User/Login/Login.jsx';
import Logout from './views/User/logout/logout.jsx';
import './App.css';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/Error.jsx'
import Index from './views/Index/Index.jsx'
import Users from './views/User/Users/Users.jsx';
import Profile from './views/User/profile/profile.jsx';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/home/" exact component={Index} />
        <Route path="/register/"  component={Register} />
        <Route path="/login/"  component={  Login } />
        <Route path="/users/"  component={  Users } />
        <Route path="/profile/"  component={  Profile } />
        <Route path="/logout/"  component={  Logout } />
        <Route component={Error} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;