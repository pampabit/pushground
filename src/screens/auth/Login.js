import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Auth from '../../api/Auth'
import { AppContext } from '../../context/AppContext'

export default function Login() {

  const history = useHistory()
  const [user, setUser] = useContext(AppContext)
  const [loginErrors, setLoginErrors] = useState(null)

  const handleSubmit = (e) => {
      e.preventDefault()
      var data = Auth.login(e.target.email.value, e.target.password.value)
      if ( data ) {
        setUser(state => ({ ...state, user: data.user, token: data.token }))
        history.push("/")
      } else {
        setLoginErrors('Check your data')
      }
  }

  return (
    <div class="row mt-5">
      <div class="col-sm-12 auth-form">

          <h1>Welcome to Pushground.</h1>

          <form onSubmit={handleSubmit} method="POST">

            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="text" name="email" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control" />
            </div>

            {
              loginErrors &&
              <div class="alert alert-danger" role="alert">
                {loginErrors}
              </div>
            }

            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
