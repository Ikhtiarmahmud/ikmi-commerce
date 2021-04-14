import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const ProtectedRoute = ({ children, ...rest }) => {
   return (
    <Route {...rest} render={() => {
        return (
            isAuthenticated() ? children : <Redirect to="/account"/>
        )
     }}
     />
   )
}

export default ProtectedRoute;