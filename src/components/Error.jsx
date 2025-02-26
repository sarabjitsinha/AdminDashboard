import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Error(){
    const err=useRouteError();
    const navigate=useNavigate()
    return (
        <div className="justify-self-center h-auto w-auto font-serif">
            <p>OOPs !!! This is not a valid path</p>
            <p>{err.status}</p>
            <p>{err.statusText}</p>
            <button type="submit" className=" bg-green-900 text-amber-50 hover: cursor-pointer" onClick={()=>navigate('/')}>Return to Home</button>
        </div>
    )
}

export default Error;