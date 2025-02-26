import "./home.css"
import Topchart from "./Topchart";
import Chartbox from "./chartbox";
import { chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion } from "../utils/data";



function Home(){
    return (
        <div className="container">
            <div className="box box1">
                <Topchart/>
            </div>
            <div className="box box2"><Chartbox  {...chartBoxUser}/></div>
            <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
            <div className="box box4">Box 4</div>
            <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
            <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
            <div className="box box7">Box 7</div>
            <div className="box box8">Box 8</div>
            <div className="box box9">Box 9</div>
        </div>

    )
}

export default Home;