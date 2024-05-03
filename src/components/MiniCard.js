import React, { useEffect, useState } from 'react'
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import fogicon from '../images/fogicon.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import storm from '../images/storm.png'
import wind from '../images/windy.png'

const MiniCard = ({time, temp, iconString}) => {

  const [icon,setIcon]=useState()
  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('fogicon')){
        setIcon(fogicon)
      }else if(iconString.toLowerCase().includes('snow')){
        setIcon(snow)
      }else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('storm')){
        setIcon(storm)
      }else if(iconString.toLowerCase().includes('overcast')){
        setIcon(wind)
      }
    
    }

  },[iconString])
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
      {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}</p>
      <hr />

      <div className='w-full flex justify-center item-center flex-1'>
        <img src={icon} alt="weather_icon" className='w-[4rem] h-[4rem] mt-1'/>
      </div>
      <p className='text-center font-bold'>{temp}</p>
    </div>
  )
}

export default MiniCard