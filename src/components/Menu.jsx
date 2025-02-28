
import {Link} from "react-router-dom";
import { menu } from "../utils/data";

function Menu(){
    return (
        <menu className="w-44 bg-gray-500 h-screen text-sm p-4">
            <h2>Menu</h2>
            {menu.map((item)=>{
                return(
                    <ol key={item.id} >
                        <li className=" mb-4">{item.title}</li>
                     {item.listItems.map((listitem)=>{
                        return(
                            <div key={listitem.id}>
                        <li><Link to={listitem.url} className="h-5 gap-2 flex mb-2">
                 <img src={listitem.icon} alt="" className="inline h-4"/>{listitem.title}</Link></li>
                 </div>)
                     })   
                        
            }
            </ol>    
                   
                )
            })}
            
            

        </menu>

    )
}

export default Menu;