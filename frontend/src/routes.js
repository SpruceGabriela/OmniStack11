import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from "./pages/Logon/logon";
import Register from "./pages/Register/register";
import Profile from "./pages/Profile/profile";
import NewIncident from "./pages/NewIncident/newIncident";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>

                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>  
        </BrowserRouter>
    );
}