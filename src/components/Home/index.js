import {Component} from 'react'

import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  render() {
    return (
      <div className="homeMainContainer">
        <div className="headerContainer">
          <img
            className="websiteLogo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button
            onClick={this.onLogout}
            className="logoutButton"
            type="button"
          >
            Logout
          </button>
        </div>
        <div className="contentContainer">
          <h1 className="ContentHeading">Your Flexibility Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </div>
      </div>
    )
  }
}

export default Home
