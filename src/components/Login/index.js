import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="LoginMainContainer">
        <div className="loginImageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
            alt="website login"
          />
          <form className="formContainer">
            <h1>Welcome Back!</h1>
            <label className="inp" htmlFor="username">
              User ID
            </label>
            <input
              className="inp"
              type="text"
              id="username"
              placeholder="Enter User ID"
            />
            <label className="inp" htmlFor="pin">
              PIN
            </label>
            <input
              className="inp"
              id="pin"
              type="text"
              placeholder="Enter PIN"
            />
            <button className="LoginButton" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
