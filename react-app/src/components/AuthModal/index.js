import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../auth/SignUpForm'
import { signUp } from '../../store/session';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'grey',
    top: '30%',
    margin: '0 auto',
    left: 0,
    right: 0
  }
}))

function AuthModal() {
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
      <h2 id="auth-modal-title">Text in a modal</h2>
      <button type='button' onClick={() => setToggleLogin(true)}>Log In</button>
      <button type='button' onClick={() => setToggleLogin(false)}>Sign Up</button>
      {toggleLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  );

  return (
    <div>
      <button type='button' onClick={handleOpen}>Log In</button>
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
