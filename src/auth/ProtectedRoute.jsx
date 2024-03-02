import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {hasAnyRole} from "./claimUtils";

const ProtectedRoute = ({ component: Component, requiredRoles, ...args }) => {
    const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();



    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Check if the user is authenticated.  If not, call login

    if(!isAuthenticated){
        loginWithRedirect();
        return<div>Loading...</div>
    }

    // Check to see if the user has the required roles
    const isAuthorized = isAuthenticated && hasAnyRole(user, requiredRoles)





    return (
        <Route
            {...args}
            render={props =>
                isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <div>Not Authorized</div>
                )
            }
        />
    );
};
export default ProtectedRoute