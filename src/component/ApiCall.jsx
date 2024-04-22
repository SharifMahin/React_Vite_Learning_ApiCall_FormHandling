import { useRef } from 'react'

export const ApiCall = () => {
    let APIData=useRef(null);
    let myRef = useRef();
    const apiCall = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=America&units=Metric&appid=86ef93d5c15072f43a224d37251eb7eb");
        APIData.current = await response.json();
    }
    const showData =() => {
      myRef.current.innerText=JSON.stringify(APIData.current);
    }

  return (
    <div>
        <p ref={myRef}></p>
        <button onClick={apiCall}>Api Call</button>&nbsp;
        <button onClick={showData}>Show Data</button>
    </div>
  )
}

