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
    forecast: {
      forecastday: [
        {
          date: string;
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

const WeeklyForcust = ({ data }: InputProps) => {
  return (
    <div className="pl-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-4 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p className="opacity-70">{day.day.condition.text}</p>
          <div>
            <p className="text-orange-400/80">
              H {day.day.maxtemp_c.toFixed()} °C
            </p>
            <p className="text-blue-600/80">
              L {day.day.mintemp_c.toFixed()} °C
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForcust;
