import "./home.css"
import Topchart from "./Topchart";
import Chartbox from "./chartbox";
import BarChartbox from "./BarChartbox";
import { chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxVisit,barChartBoxRevenue } from "../utils/data";



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
            <div className="box box8"><BarChartbox {...barChartBoxVisit}/></div>
            <div className="box box9"><BarChartbox {...barChartBoxRevenue}/></div>
        </div>

    )
}

export default Home;