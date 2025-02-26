/* eslint-disable react/prop-types */
import { ResponsiveContainer,Line,LineChart,Tooltip } from "recharts";

function Chartbox(props){

    return(
        <div key={props.title} className=" font-medium">
            <h2>Chartbox</h2>
            <section className="flex justify-between">
            <div className=" flex flex-col gap-5">
                <li><img src={props.icon} alt="" className="inline h-5"/> {props.title}</li>
                <li>{props.number}</li>
                <li>view all</li>
            </div>
            
            <ResponsiveContainer width="50%" aspect={3} className=' flex flex-col items-end gap-7'>
                <LineChart  data={props.chartData} >
                    <Line type="monotone" dataKey={props.dataKey} stroke="blue" strokeWidth={2} activeDot={{r:10}} />
                    <Tooltip contentStyle={{backgroundColor: "transparent" , border:"none"}} 
                    labelStyle={{display:"none"}}
                    />
                </LineChart>
                <span className="flex flex-col justify-end">
                    <span className={`-mb-2 ${props.percentage<40 ? ' text-red-600':'text-green-600'}`}>{props.percentage}% </span>
                    <span>this month</span>
                </span>
            </ResponsiveContainer>
            </section>
        </div>
    )
}

export default Chartbox;