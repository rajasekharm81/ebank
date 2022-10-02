import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/protectedRoute'

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/NotFound" component={NotFound} />
      <Redirect to="/NotFound" />
    </Switch>
  </>
)

export default App
