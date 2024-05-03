import { useState } from "react";
import search from "./images/search.svg";
import "./App.css";
import { useStateContext } from "./images/context";
import BackgroundLayout from "./components/BackgroundLayout";
import WeatherCart from "./components/WeatherCart";
import MiniCard from "./components/MiniCard";

function App() {
  const [input, setInput] = useState("");
  const { weather, location, value, place,setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input)
    setInput("")
  }
  console.log(place.india)

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between item-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>

        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex item-center p-2 g-2">
          <img
            src={search}
            alt="search_logo"
            className="w-[]1.5rem h-[1.5rem]"
          />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity()
              }
            }}
            value={input}
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>

      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] item-center justify-center">
        <WeatherCart
          // location={weather.locations}
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {value?.slice(1, 7).map((curr,id) => {
            
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
