import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Configurator} from "./pages/Configurator";
import {Stack} from '@fluentui/react';

const style = {
    root:{
        margin: "0 auto",
        width: "800px",
    },

}
function App() {

    return <Stack styles={style}>
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true}>
                    <Configurator/>
                </Route>
            </Switch>
        </BrowserRouter>
    </Stack>
}

export default App;
