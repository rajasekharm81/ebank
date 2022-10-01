import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="NotFoundContainer">
        <img
          className="notFoundImage"
          src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    )
  }
}

export default NotFound
