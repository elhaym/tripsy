import React from 'react';
import { Route } from "react-router-dom";
/**
 * Render a React Component <Route> in which is passed in a function to be called when the location matches. 
 * The render prop receives all the same route props as the component render prop.
 * @param {*} param0 
 * @returns a React component <Route> that renders a new React element.
 */
export class PropsRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        /**
         * Render a React element taking the Component passed as props to Route and all remaining props.
         * @param {*} component 
         * @param  {...any} rest 
         * @returns a new React element.
         */
        

        const renderRouteProps = props => {
            return (
                <Component {...props} />
            );
        }
        return (
            <Route {...rest} render={renderRouteProps} />
        );
    }
}