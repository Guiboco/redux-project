import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
export const Header = props => (
  <ul className='navbar'>
    <div className='barbox1'>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/home/">home</NavLink></li>
    <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">users</NavLink></li>
    </div>
    {props.user ?
      <div className='baruser'> 
        {/* {props.user.name}
        {props.user.email} */}
        <li> <NavLink className="navLink" activeClassName="is-active" to="/profile/">profile</NavLink></li>
        <li> <NavLink className="navLink" activeClassName="is-active" to="/logout/">logout</NavLink></li>
      </div> :
      <div className='barguest'>
        <li> <NavLink className="navLink" activeClassName="is-active" to="/register/">Register</NavLink></li>
        <li> <NavLink className="navLink" activeClassName="is-active" to="/login/">Login</NavLink></li>
      </div>
    }
  </ul>);

const mapStatetoProps = (state) => {
  return {
    user: state.userReducer.user
  }
}
export default connect(mapStatetoProps)(Header);