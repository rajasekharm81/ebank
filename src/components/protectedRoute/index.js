import Cookies from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  const {location} = props
  const {pathname} = location

  if (jwtToken !== undefined) {
    if (pathname !== '/login') {
      return <Route {...props} />
    }
    return <Route path="/" />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
