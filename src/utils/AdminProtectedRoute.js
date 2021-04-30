import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, isAdmin } from './auth';

const AdminProtectedRoute = ({ children, ...rest }) => {
   return (
    <Route {...rest} render={() => {
        return (
            isAuthenticated() && isAdmin() ? children : <Redirect to="/profile"/>
        )
     }}
     />
   )
}

export default AdminProtectedRoute