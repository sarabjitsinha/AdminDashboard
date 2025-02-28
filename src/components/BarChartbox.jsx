/* eslint-disable react/prop-types */
import { Bar, BarChart, ResponsiveContainer,Tooltip, } from "recharts";


export default function BarChartbox(props){

    return (
        <div className="flex flex-col gap-5 items-center">
            <h1>{props.title}</h1>

            <ResponsiveContainer width="90%" height="80%">
            <BarChart data={props.chartData}>
                <Bar dataKey={props.dataKey} fill={props.color}  />
                <Tooltip contentStyle={{backgroundColor:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                itemStyle={{color:"wheat"}}
                cursor={{fill:"none"}}
                position={{y:-40}}
                />
            </BarChart>

            </ResponsiveContainer>

        </div>

    )
}