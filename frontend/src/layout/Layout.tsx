import {Outlet} from "react-router";

export function Layout() {
    return <div className="wrapper" style={{width: "700px", margin: "0 auto"}}>
        <Outlet/>
    </div>
}