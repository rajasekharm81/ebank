import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="homeMainContainer">
        <div className="headerContainer">
          <img
            className="websiteLogo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button className="logoutButton" type="button">
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
