import { useRef } from "react"
import Exmple from './component/Exmple';
import { ApiCall } from "./component/ApiCall";
import { StateUse } from './component/StateUse';
import {FormHandling} from './component/FormHandling'

const App = () => {
  let myRefId = useRef();
  let myAlertShow = useRef();
  const change=()=>{
     myRefId.innerHTML="<ul><li>A</li><li>B</li></ul>";
  }
const alertShow = () => {
  
    alert(myAlertShow.current.value);
}

  return (
    <div>
      <Exmple/>
      <ApiCall/>
      <StateUse/>
      
      <h1 style={{color:'red'}} ref={(qq)=>myRefId=qq}></h1>
      <button onClick={change}>click please</button>
      <br/><br/><br/>
      <h2>Show Input Value as a Alert</h2>
      <input type="text" ref={myAlertShow} placeholder="Enter your Name" />&nbsp;
      <button type="button" onClick={alertShow}>Click</button> <br /><br />
      
      <FormHandling/>

    </div>
  )
}
export default App 