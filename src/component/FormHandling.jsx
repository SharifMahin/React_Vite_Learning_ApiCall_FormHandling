import React, { useState } from 'react'


export const FormHandling = () => {
    let [formObj,setFormObj]= useState({ fName:"",lName:"",country:"",gender:"Male"});

    const inputChange = (property,value) =>{
            setFormObj(prevObj=>({
                ...prevObj,
                [property]:value
            }))
        }


    const submit =(event)=>{

        event.preventDefault();
        alert(JSON.stringify(formObj));
    }
  return (
    <div className='container'>
        <h1>Form Handling using React Js</h1>
        <form onSubmit={submit}>
            <label htmlFor="fname">First Name </label>
            <input id='fname' onChange={(e)=>{inputChange("fName",e.target.value)}} type="text" value={formObj.fName} placeholder='Enter fName' /><br />
            <label htmlFor="lname" >Last Name </label>
            <input id='lname' onChange={(e)=>{inputChange("lName",e.target.value)}} type="text"  value={formObj.lName} placeholder='Enter lName' /><br />

            <label htmlFor="country">Country Name </label>
            <select id='country'  onChange={(e)=>{inputChange("country",e.target.value)}} value={formObj.country}>
                <option value="">Choose Country Name</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Canada">Canada</option>
                <option value="Finland">Finland</option>
                <option value="Japan">Japan</option>
            </select>
            <br />

            <label htmlFor="gender">Gender </label>
            <input id='gender' checked={formObj.gender==="Male"} onChange={()=>{inputChange("gender",'Male')}} type="radio"/>Male
            <input id='gender' checked={formObj.gender==="Female"} onChange={()=>{inputChange("gender",'Female')}} type="radio" />Female

            <br /><br />
            <button type='submit'>Submit</button>    
        </form>  
    </div>
  )
}
