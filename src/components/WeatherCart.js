import React, { useEffect, useState } from 'react'
import {useDate} from "../Utils/useDate"
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import fogicon from '../images/fogicon.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import storm from '../images/storm.png'
import wind from '../images/windy.png'
import '../index.css'

const WeatherCart = ({
  temperature, windspeed, humidity, place, heatIndex, iconString,conditions
}) => {

  const [icon, setIcon] = useState(sun)
  const {time} = useDate()
 

  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('clear')){
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('fogicon')){
        setIcon(fogicon)
      }else if(iconString.toLowerCase().includes('snow')){
        setIcon(snow)
      }else if(iconString.toLowerCase().includes('storm')){
        setIcon(storm)
      }else if(iconString.toLowerCase().includes('overcast')){
        setIcon(wind)
      }
    
    }
  },[iconString])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center item-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center item-center'>{temperature}</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between item-center mt-2'>
        <p className='flex-1 text-center p-1.5'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-1.5'>{time}</p>
      </div>
      <div className='w-full flex justify-between item-center '>
        <p className='flex-1 mr-2 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
          Wind Speed
          <span className='font-normal flex justify-center'>{windspeed}</span>
        </p>
        <p className=' flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
          Humidity
          <span className='font-normal flex justify-center'>{humidity}</span>
        </p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between item-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr />
      <div className='w-full p-4 justify-center item-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCart