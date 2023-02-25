import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginFlowButton from '../../components/Button/LoginFlowButton/LoginFlowButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './signup.css'

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [showpwd, setshowpwd] = useState(false)

  const emailLoginFunction = (e) => {
    if (email !== 'anablocc@gmail.com' || password !== '12345') {
      toast.error('invalid credential!')
    } else {
      navigate('home')
    }
  }

  return (
    <div className="loginMainDiv">
      {
        <form
          action=""
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault()
            emailLoginFunction()
          }}
        >
          <div className="loginHeading">Sign Up</div>
          <label htmlFor="">Name</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="">Aadhar Number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label htmlFor="">Password </label>
          <input
            type={showpwd ? 'text' : 'password'}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="loginbtn">
            <LoginFlowButton
              text={'Sign Up'}
              submitHandler={() => emailLoginFunction}
            />
          </div>
        </form>
      }
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default SignIn
