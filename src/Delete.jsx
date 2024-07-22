import { useState } from "react";

export default function Delete({onsubmit})
{
    const[id,setId]=useState(0);
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        onsubmit(id);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ENTER THE ID" onChange={(e)=>setId(e.target.value)}/>
                <button>DELETE</button>
            </form>
        </div>
    );
}