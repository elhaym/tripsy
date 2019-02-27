import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Page/Home/Home';
// Other pages import go there 

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route
                    exact path='/'
                    render={() => 
                    <Home
                        handleWonderButton={props.handleWonderButton}
                        wonderIcon={props.wonderIcon}
                    />}
                />
            </Switch>
        </main>
    );
}

export default Main;
