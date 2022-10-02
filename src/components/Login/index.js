import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', error: false}

  updateUserName = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  getApiData = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        user_id: `${username}`,
        pin: `${password}`,
      }),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({error: false})
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg, error: true})
    }
  }

  render() {
    const check = Cookies.get('jwt_token')
    if (check !== undefined) {
      return <Redirect to="/" />
    }

    const {errMsg, error} = this.state
    const errorText = error ? errMsg : null
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
              onChange={this.updateUserName}
            />
            <label className="inp" htmlFor="pin">
              PIN
            </label>
            <input
              className="inp"
              id="pin"
              type="password"
              placeholder="Enter PIN"
              onChange={this.updatePassword}
            />
            <button
              onClick={this.getApiData}
              className="LoginButton"
              type="submit"
            >
              Login
            </button>
            <p>{errorText}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
