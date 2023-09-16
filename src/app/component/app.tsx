"use client";

import Current from "./Current";
import Input from "./Input";
import React, { useState } from "react";
import WeeklyForcust from "./WeeklyForcust";
import WeatherDetails from "./WeatherDetails";

const InitialState = {
  current: {
    condition: {
      icon: "",
      text: "",
    },
    pressure_mb: 0,
    feelslike_c: 0,
    vis_km: 0,
    temp_c: 0,
    temp_f: 0,
    wind_kph: 0,
    humidity: 0,
    wind_dir: "",
  },
  location: {
    name: "",
    region: "",
    country: "",
  },
  forecast: {
    forecastday: [
      {
        date: "",
        astro: {
          sunrise: "",
          sunset: "",
        },
        day: {
          maxtemp_c: 0,
          maxtemp_f: 0,
          mintemp_c: 0,
          mintemp_f: 0,
          condition: {
            text: "",
            icon: "",
          },
        },
      },
    ],
  },
};

const App = () => {
  const [data, setData] = useState(InitialState);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const url = "/api/weather";

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && location.length > 0) {
      e.preventDefault();
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ location }),
        });
        if (!response.ok) {
          throw new Error();
        }
        const { data } = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error: any) {
        setError("City not Found");
        setData(InitialState);
      } finally {
        setLoading(false);
      }
    }
  };

  let content;

  if (data === InitialState && error === "") {
    content = (
      <div className="text-white text-center mt-5">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Weather App</h2>
        <p className="text-xl">Enter a city name to get a weather forcast.</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center mt-5">
        <p className="capitalize text-3xl font-semibold mb-4">{error}</p>
        <p className="text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeeklyForcust data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  if (loading) {
    content = (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit min-h-screen">
      <div className="bg-white/25 w-full flex flex-col h-fit min-h-screen">
        {/* INPUT & LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input
            handleSearch={handleSearch}
            setLocation={setLocation}
            location={location}
          />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl font-bold italic">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default App;
