import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [value, setValue] = useState([]);
  const [place, setPlace] = useState("Jaipur");
  const [location, setLocation] = useState("");
  
  const fetchWeather = async () => {
    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
          aggregateHours: '24',
          location: place,
          contentType: 'json',
          unitGroup: 'metric',
          shortColumnNames: '0'
        },
        headers: {
          'X-RapidAPI-Key': '1c0fea893dmsh518adb3ca027c29p13a8c2jsnb4aae0e8e7ec',
          'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
      };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValue(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather()
  },);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        value,
        location,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
