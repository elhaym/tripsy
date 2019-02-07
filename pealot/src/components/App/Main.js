import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Page/Home/Home';
//** Other pages import go there */

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </main>
    );
}

export default Main;
