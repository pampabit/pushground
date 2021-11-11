import React, { useContext, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import AuthLayout from '../screens/layouts/AuthLayout'
import AdminLayout from '../screens/layouts/AdminLayout'
import Auth from '../api/Auth'

export const AuthRoute = ({ component: Component, ...rest }) => {

  const [context, setContext] = useContext(AppContext)

  if (context.user) {
    return(
      <Redirect to={{
        pathname: '/',
      }} />
    )
  } else {
    return (
      <Route {...rest} render={
        matchProps => (
          <AuthLayout>
            <Component {...matchProps} />
          </AuthLayout>
        )
      } />
    )
  }
}

export function PrivateRoute({ children, ...rest }) {

  const [context, setContext] = useContext(AppContext);

  return(
    <Route
      {...rest}
      render={({ location }) =>
        context.user ? (
          <AdminLayout>{children}</AdminLayout>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
        )
      }
    />
  )
}
