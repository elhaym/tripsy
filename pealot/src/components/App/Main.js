import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Page/Home/Home';
import { Login } from '../Page/Login/Login';
import { Register } from '../Page/Register/Register';
// Other pages import go there 

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route
                    exact path="/"
                    render={() =>
                        <Home
                            handleWonderButton={props.handleWonderButton}
                            wonderIcon={props.wonderIcon}
                        />}
                />
                <Route
                    path="/signin"
                    component={Login}
                />
                <Route
                    path="/signup"
                    component={Register}
                />
            </Switch>
        </main>
    );
}

export default Main;
