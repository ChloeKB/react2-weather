import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="forecastMainWeather">
      <h1>{props.city}</h1>
      <p class="date-time">
        {props.date}
        <br />
        {props.time}
      </p>
      <img src={props.imageUrl} alt="sunny weather icon" id="icon" />
      <p class="temperature" id="temperature">
        {props.temperature} ºC
      </p>
      <p class="weather-description" id="weather-description">
        {props.description}
      </p>
      <p class="minmax" id="minmax">
        {" "}
        min {props.minTemp} ºC - max {props.maxTemp} ºC
      </p>
      <hr />
      <p class="sunrise-sunset" id="sunrise-sunset">
        sunrise {props.sunrise} - sunset {props.sunset}
      </p>
    </div>
  );
}
