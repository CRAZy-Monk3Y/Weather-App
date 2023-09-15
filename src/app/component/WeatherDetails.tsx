import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface InputProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
      temp_c: number;
      temp_f: number;
      wind_kph: number;
      humidity: number;
      wind_dir: string;
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
    forecast: {
      forecastday: [
        {
          date: string;
          astro: {
            sunrise: string;
            sunset: string;
          };
          day: {
            maxtemp_c: number;
            maxtemp_f: number;
            mintemp_c: number;
            mintemp_f: number;
            condition: {
              text: string;
              icon: string;
            };
          };
        }
      ];
    };
  };
}

const WeatherDetails = ({ data }: InputProps) => {
  return (
    <>
      <div className="p-12">
        <h2 className="mb-4 text-2xl text-white">Weather Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{data.current.wind_kph} Km/H</h3>
            </div>
            <div className="text-5xl">
              <MdAir />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Humidity</h3>
              <h3>{data.current.humidity} %</h3>
            </div>
            <div className="text-5xl">
              <WiHumidity />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Direction</h3>
              <h3>{data.current.wind_dir} </h3>
            </div>
            <div className="text-5xl">
              <GiCompass />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Sun Rise</h3>
              <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <div className="text-5xl">
              <BsSunrise />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Sun Set</h3>
              <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <div className="text-5xl">
              <BsSunset />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Air Pressure</h3>
              <h3>{data.current.pressure_mb} mbar</h3>
            </div>
            <div className="text-5xl">
              <GiWindSlap />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Feels Like</h3>
              <h3>{data.current.feelslike_c.toFixed()} °C</h3>
            </div>
            <div className="text-5xl">
              <CiTempHigh />
            </div>
          </div>
          <div className="bg-white/50 flex items-center justify-center p-4 gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Visibility</h3>
              <h3>{data.current.vis_km} Km</h3>
            </div>
            <div className="text-5xl">
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
