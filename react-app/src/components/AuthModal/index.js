import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../auth/SignUpForm'
import LogoutButton from '../auth/LogoutButton'
import {NavLink} from 'react-router-dom'
import './authmodal.css'
import {useSelector} from 'react-redux'


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#f5f5f5',
    top: '30%',
    margin: '0 auto',
    left: 0,
    right: 0
  }
}))

function AuthModal({setAuthenticated}) {
  const sessionUser = useSelector(state => state.session.user);
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div className={classes.paper}>
      <div className='modal_btns'>
          <button id="login_btn" className={toggleLogin ? '' : 'inactive'} type='button' onClick={() => setToggleLogin(true)}>Log In</button>
          <button type='button' className={toggleLogin ? 'inactive' : ''} onClick={() => setToggleLogin(false)}>Sign Up</button>
      </div>
      {toggleLogin ? <LoginForm setOpen={setOpen} setAuthenticated={setAuthenticated} /> : <SignUpForm setAuthenticated={setAuthenticated} setOpen={setOpen}/>}
    </div>
  );

  return (
    <div style={{margin: 'auto 0', display: 'flex'}} >
      {sessionUser && !sessionUser.errors ? <LogoutButton /> : <button className='login_btn' type='button' onClick={handleOpen}>Log In</button>}
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="auth-modal-title"
      aria-describedby="auth-modal-description"
      >{body}
      </Modal>
    </div>
  )
}

export default AuthModal
