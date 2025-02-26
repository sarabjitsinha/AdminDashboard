import Layout from "./components/Layout"
import Menu from "./components/Menu";
import Home from "./components/Home"
import { Outlet } from "react-router-dom";

function App(){
    return (

        <div>
            <Layout/>
            <div className=" flex h-full overflow-y-hidden">
            <Menu/>
            <Home/>
            </div>
            <Outlet/>
        </div>
    )
}

export default App;