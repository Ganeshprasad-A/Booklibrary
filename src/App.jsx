import { useState } from 'react'
import './App.css'
import Display from './Display'
import Add from './Add';
import Delete from './Delete';
import Update from './Update';
function App() {
  const [books,setBooks]=useState([{id:100,title:"The Tempest",author:"William Shakespeare"},
    {id:200,title:"Romeo Juliet",author:"William Shakespeare"}]);
    const [HandleGet,setHandleGet]=useState(false);
    const[handleId,setHandleId]=useState(false);
    const [id,setId]=useState(0);
    const handleGet=()=>
    {
        setHandleGet(true);
    }
    const handleGetId=()=>
    {
        setHandleId(true);
        setTimeout(()=>
        {
          setHandleId(false)
        },2000);
    }
    const handleSubmit=(title,author)=>
    {
        const newBook={
          id:Math.round(Math.random()*100),
          title,
          author
        };
        setBooks([...books,newBook]);
    }
    const handleDelete=(id)=>
    {
        setBooks(books.filter((element)=>element.id!=id))
    }
    const handleUpdate=(title,id)=>
    {
      setBooks(books.map((element)=>
      {
          if(element.id==id)
            return {...element,title:title};
          else
            return element;
      }))
    }
  return (
    <>
     
      <div className='getcontainer'>
       {
        HandleGet && books.map((element,index)=>
        {
          return <Display key={index} {...element}/>;
        })
      }
      {
        handleId && books.filter((element)=>element.id==id).map((element,index)=>
        {
          return <Display key={index} {...element}/>;
        })
      }
      <button onClick={handleGet}>GET</button>
      </div>
      <div className="container">      
      <div>
      <input type="text" placeholder='ENTER THE ID' onChange={(e)=>setId(e.target.value)}/>
      <button onClick={handleGetId}>GET by ID</button>
      </div>
      <Add className="add" onsubmit={handleSubmit}/>
      <Update onsubmit={handleUpdate}/>
      <Delete onsubmit={handleDelete}/>
      </div>
     
    </>
  )
}

export default App
