import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom';
import '../AuthModal/authmodal.css'

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.reload(false);
  };

  return (
  <>
    <NavLink style={{margin: 'auto 5px', color: 'black', fontSize: '18px'}} to="/profile/dashboard">Profile</NavLink>
    <button className="login_btn" onClick={onLogout}>Logout</button>;
  </>
  )
};

export default LogoutButton;
