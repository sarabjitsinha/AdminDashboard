import "./topchart.css"
import { topDealUsers } from "../utils/data";

function Topchart(){
    return(
        <div>
            <h2>Chartbusters</h2>
            {topDealUsers.map((item)=>{
                return(
                    <div key={item.id} className="flex list-none gap-10 justify-evenly text-white mb-5" id="topchart">
                        <li><img src={item.img} alt="" className="h-10 w-10 rounded-4xl"/></li>
                        <div className="flex flex-col">
                            <li>{item.username}</li>
                            <li>{item.email}</li>
                        </div>
                        <li>{item.amount}</li>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Topchart;