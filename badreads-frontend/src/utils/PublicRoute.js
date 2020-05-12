import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './common';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
    console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} {...rest}  /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
}
 
export default PublicRoute;