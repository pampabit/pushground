import React, { useContext } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { AuthRoute, PrivateRoute } from './RouteLayout'
import Login from '../screens/auth/Login'
import Dashboard from '../screens/admin/Dashboard'
import Blank from '../screens/admin/Blank'
import { AppContext } from '../context/AppContext'

export const AppRoute = () => {
  return (
    <Router data="data">
      <Switch>
        <AuthRoute path="/login" component={Login} render={props => <Login {...props} />} />
        <PrivateRoute exact path="/"><Dashboard /></PrivateRoute>
        <PrivateRoute path="/blank"><Blank /></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default AppRoute
