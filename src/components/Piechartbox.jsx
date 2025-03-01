import { ResponsiveContainer,PieChart,Pie,Tooltip,Cell } from "recharts";

function Piechartbox(){
    const data = [
        { name: 'Mobile', value: 400, color:'#0088FE' },
        { name: 'SmartPhone', value: 300, color:'#00C49F' },
        { name: 'Desktop', value: 300, color:'#FFBB28' },
        { name: 'Television', value: 200, color:'#FF8042' },
      ];
      

    return(
        <div className="flex flex-col gap-12">
            <h1 className="text-white">Piechart</h1>
            <ResponsiveContainer width="90%" height={300}>
                <PieChart>
                    <Pie data={data}
                   
          innerRadius={"65%"}
          outerRadius={"80%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          
>
{data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
          </Pie>
          <Tooltip contentStyle={{background:"transparent"}}/>
                </PieChart>
                
            </ResponsiveContainer>
            <div className=" flex gap-3 text-xs">
                {data.map((item)=>{
                    return(
                        <div key={item.name}className=" gap-1" >
                            <span style={{backgroundColor:`${item.color}`}} className="inline-block w-2 h-2 rounded-full"></span>
                            <span>{item.name}</span>
                            <div>{item.value}</div>
                        </div>

                    )
                    
                })
                  }
                
            </div>

        </div>
    )
}

export default Piechartbox;