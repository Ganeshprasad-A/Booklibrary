
import { useState } from "react";

export default function Update({onsubmit})
{
    const[title,setTitle]=useState('');
    const[id,setId]=useState(0);
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        onsubmit(title,id);
    }
    return(
        <div>
            <form>
                
                <input type="text" placeholder="ENTER THE ID" onChange={(e)=>setId(e.target.value)}/>
                <input type="text" placeholder="ENTER THE TITLE" onChange={(e)=>setTitle(e.target.value)} />
                <button onClick={handleSubmit}>UPDATE</button>
            </form>
        </div>
    );
}