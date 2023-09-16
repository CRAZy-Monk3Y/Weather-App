import { getCurrentDate } from "../utils/currentDate";
import { MdLocationOn } from "react-icons/md";

interface InputProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
      temp_f: number;
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
  };
}

const Current = ({ data }: InputProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current?.condition.icon;
  const weatherText = data.current?.condition.text;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div className="w-full">
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-[70px] object-cover"
            src={weatherIcon}
            alt={weatherText}
          />
          <p className="text-white text-sm">{weatherText}</p>
        </div>
      </div>
      <p className="text-5xl text-white">
        {data.current.temp_c.toFixed()} <span>°C</span>
      </p>
      <div>
        <div className="flex items-center bg-white/90 p-2 rounded-xl">
          <MdLocationOn />
          <p>
            {data.location.name},
            <span className="text-black/60">
              {`${data.location.region && ` ${data.location.region},`} ${
                data.location.country
              }`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Current;
