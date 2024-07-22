
import { useState } from "react";

export default function Add({onsubmit})
{
    const[title,setTitle]=useState('');
    const[author,setAuthor]=useState('');
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        onsubmit(title,author);
    }
    return(
        <div className="adddiv">
            <form>
                <input type="text" placeholder="ENTER THE TITLE" onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" placeholder="ENTER THE AUTHOR" onChange={(e)=>setAuthor(e.target.value)}/>
                <button onClick={handleSubmit}>ADD</button>
            </form>
        </div>
    );
}