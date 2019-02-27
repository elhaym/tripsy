import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
    const mergedProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, mergedProps)
    );
}

/**
 * Render a React component <Route> to which pass in a function to be called when the location matches
 * if the user is authentified and redirect him to the path passed to the redirectTo prop in the opposite case. 
 * The render prop receives all the same route props as the component render prop.
 * 
 * @param {*} param0 
 * @returns a React component <Route> that renders a new React element if user is authentified.
 * @returns a React component <Redirect> that redirects the user to the path passed to the redirectTo prop.
 */
const PrivateRoute = ({ component, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return auth.loggedIn() ? (
                renderMergedProps({ component, routeProps, rest })) :
                (
                    <Redirect to={{
                        pathname: redirectTo,
                        state: { from: routeProps.location }
                    }} />
                );
        }} />
    )
}

export default PrivateRoute;