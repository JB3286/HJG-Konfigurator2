import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {

    return <BrowserRouter>
        <Switch>
            <Route path={"/"} exact={true}>

            </Route>
        </Switch>
    </BrowserRouter>

}

export default App;
