import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import './auth.css'


const LoginForm = ({setAuthenticated, setOpen}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e, demo) => {
    e.preventDefault();
    if (demo) {
      setEmail('demo@aa.io')
      setPassword('password')
    }
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setOpen(false)
      setAuthenticated(true)
      return <Redirect to="/" />
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <form className="auth_form" onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={updatePassword}
        />
        <div>
        <button className="auth_btn" type="submit">Log In</button>
        <div className="login_seperator">
          <h4><span>or</span></h4>
        </div>
        <button className="auth_btn" type="submit" onClick={(e) => onLogin(e, true)}>Demo</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
