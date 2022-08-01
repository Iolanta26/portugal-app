import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

import { CapitalCity } from "../types";
import { opacityAnimation, SunRays } from "./KeyFrames";
import { theme } from "../theme";

type Props = {
  cityName: CapitalCity;
};

export const Weather = ({ cityName }: Props) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      setWeather(res.data);
      setIsLoading(false);
      // console.log("response object:", res);
    };
    if (cityName) getData();
  }, [cityName]);

  return (
    <WeatherContainer>
      <Sun></Sun>
      <CityName>{cityName}</CityName>
      {isLoading ? (
        <LoadingText>Loading</LoadingText>
      ) : (
        <Temperature>{Math.round(weather.main.temp)}&#176;</Temperature>
      )}
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  position: relative;
  z-index: 100;
  right: 10px;
  top: 5px;
  left: 250px;
  background-color: transparent;
  border: 1px solid ${theme.colors.beigePallete};
  border-radius: 10px;
  width: 60px;
  height: 60px;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

const Sun = styled.div`
  width: 90px;
  height: 27px;
  border-radius: 100%;
  position: absolute;
  top: -8px;
  right: 0px;
  background-color: ${theme.colors.beigePallete};
  animation: ${SunRays} 4s infinite;
  box-shadow: 0 0 5px rgba(255, 192, 98, 0.4), 0 0 0 10px rgb(255, 198, 102),
    0 0 0 20px rgb(255, 175, 73), 0 0 0 30px rgb(255, 177, 77);
`;

const CityName = styled.div`
  position: absolute;
  z-index: 102;
  font-size: 10px;
  left: 5px;
  top: 5px;
  text-align: center;
  color: black;
  font-weight: 600;
  animation: ${opacityAnimation} 1s ease;
`;

const Temperature = styled.div`
  position: absolute;
  bottom: 2px;
  left: 5px;
  color: white;
  font-weight: 300;
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: 2px;
  left: 5px;
  color: white;
  font-weight: 300;
  font-size: 10px;
`;
