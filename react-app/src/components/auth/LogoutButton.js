import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom';

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.reload(false);
  };

  return (
  <>
    <NavLink to="/profile/dashboard">Profile</NavLink>
    <button onClick={onLogout}>Logout</button>;
  </>
  )
};

export default LogoutButton;
