import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../Pages/Home";
import User from "../Pages/User";

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users/:userId' component={User} />
        </Switch>
    )
}

export default Routes;