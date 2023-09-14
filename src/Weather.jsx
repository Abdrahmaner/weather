import React, { useState, useEffect } from "react";
import axios from "axios";
import temp from "./photos/temp.png";
import humidity from "./photos/humidity.png";
import clouds from "./photos/clouds.png";
import Rain from "./photos/Rain.jpg";
import Clear from "./photos/Clear.png";
import './style.css';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location , setLocation] = useState("london");
  const [alt , setAlt] = useState("");
  
  useEffect(() => {
   axios
     .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=020d0adb2deb39263482387bd27421d6`)
     .then((res) => setWeatherData(res.data))
     .catch((error) => console.error("Error fetching weather data:", error));
 }, []);
 function Generate() {
   axios
     .get(`https://api.openweathermap.org/data/2.5/weather?q=${alt}&appid=020d0adb2deb39263482387bd27421d6`)
     .then((res) => {
       setWeatherData(res.data);
       setLocation(alt); 
       setAlt(''); 
       // Update the location state here, not alt
     })
     .catch((error) => console.error("Error fetching weather data:", error));
 }
  return (
    <><div className="container">
      <h1 >
        Hello, this is a page for weather
      </h1>
      <div className='container1'>
      <input className="" type="text" placeholder="Location..." value = {alt} onChange={(e)=>setAlt(e.target.value)} />
      <button className = "" type="button" onClick={Generate}>Run</button>
      {weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
 <div className="div">
 
 
  <div>
    <b>Temperature</b>: {parseFloat(weatherData.main.temp - 273.15).toFixed(2)}°C
    <img className="image" src={temp} width="20" height="50"  style={{ verticalAlign: 'middle' }} alt="" />
  </div>
  <div>
    <b>Humidity</b>: {weatherData.main.humidity}%
    <img className="image" src={humidity} width="50" height="50" style={{ verticalAlign: 'middle' }} alt="" />
  </div>
</div>

<div>
    <b>state</b>: {weatherData.weather[0].main}
    {weatherData.weather[0].main=="Clouds"&&<img className="image" src={clouds} width="50" height="50" style={{ verticalAlign: 'middle' }} alt="" />}
    {weatherData.weather[0].main=="Rain"&&<img className="image" src={Rain} width="50" height="50" style={{ verticalAlign: 'middle' }} alt="" />}
    {weatherData.weather[0].main=="Clear"&&<img className="image" src={Clear} width="50" height="50" style={{ verticalAlign: 'middle' }} alt="" />}
  </div>
</div>
    
        
      ):''}
      </div>
      </div>
    </>
  );
}
