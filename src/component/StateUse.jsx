import { useState } from "react"

export const StateUse = () => {
  let [list,setList]=useState([]);
  let [item,setItem]=useState("");
  const addToList=()=>{
    list.push(item);
    setList([...list]);
  }
  const remove=(index)=>{
     list.splice(index,1)
     setList([...list])
  }

  return (
    <div>
        <h1>Todo List</h1>
        <table>
          <tbody>
            {
              list.length!==0?(
                list.map((element,index)=>{
                    return(
                      <tr>
                        <td>{(index+1)+"."}</td>
                        <td>{element}</td>
                        <td>
                          <button onClick={()=>{remove(index)}}>remove</button> 
                        </td>
                      </tr>
                    )
                })
              ):(<tr></tr>)          
              }
          </tbody>
        </table>
        <input type="text" onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>&nbsp;
        <button onClick={addToList}>Add</button>
        <p>{item}</p>
        <h1>{list.length}</h1>
    </div>
  )
}
    