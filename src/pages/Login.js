import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { auth } from '../authentication/firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  const signIn = (event) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history('/')
      })
      .catch((error) => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="login_logo">
          <StorefrontIcon className="login_logo_image" fontSize="large" />
          <h2 className="login_title">Hareesh's E-Shop</h2>
        </div>
      </Link>
      <div className="login_container">
        <h1>Signin</h1>
        <form>
          <h5>Email:</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="login_signin" onClick={signIn}>
          Sign In
        </button>
        <p>
          By signing-in you agree to the eshop website conditions of Use &
          Sale.Please see our Privacy Notice,our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_register" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  )
}

export default Login
