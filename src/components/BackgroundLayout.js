import React, { useEffect, useState } from 'react'
import { useStateContext } from '../images/context'
import Cloudy from "../images/Cloudy.jpg"
import Clear from "../images/Clear.jpg"
import Rainy from "../images/Rainy.jpg"
import Snow from "../images/Snow.jpg"
import Stormy from "../images/Stormy.jpg"
import fog from "../images/fog.png"

const BackgroundLayout = () => {

  const {weather} = useStateContext()
  const [image, setImage]=useState(Clear)

  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions

      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }else if(imageString.toLowerCase().includes('snow') ){
        setImage(Snow)
      }else if(imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder')){
        setImage(Stormy)
      }else if(imageString.toLowerCase().includes('fog')){
        setImage(fog)
      }else if(imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }

    }
  },[weather])
  return (
    <img src={image} alt='"weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout