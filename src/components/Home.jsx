import "./home.css"
import Topchart from "./Topchart";
import Chartbox from "./chartbox";
import BarChartbox from "./BarChartbox";
import { chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxVisit,barChartBoxRevenue } from "../utils/data";
import Piechartbox from "./Piechartbox";
import Areachartbox from "./Areachartbox";

function Home(){
    return (
        <div className="container">
            <div className="box box1">
                <Topchart/>
            </div>
            <div className="box box2"><Chartbox  {...chartBoxUser}/></div>
            <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
            <div className="box box4"><Piechartbox/></div>
            <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
            <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
            <div className="box box7"><Areachartbox/></div>
            <div className="box box8"><BarChartbox {...barChartBoxVisit}/></div>
            <div className="box box9"><BarChartbox {...barChartBoxRevenue}/></div>
        </div>

    )
}

export default Home;