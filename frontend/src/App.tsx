import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Configurator} from "./pages/Configurator";
import {Stack} from '@fluentui/react';
import {Layout} from "./layout/Layout";

const style = {
    root: {
        margin: "20px auto",
        width: "1000px",
    },
}

function App() {

    return <Stack styles={style}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate to="/configurator/fliegengitter"/>}/>
                    <Route path="configurator">
                        <Route path=":product" element={<Configurator/>}/>
                        <Route index element={<Navigate to="/"/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Stack>
}

export default App;
