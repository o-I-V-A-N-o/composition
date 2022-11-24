/**
   * Компонент для информации о погоде.
   *
   */
function Weather(props) {
  return (
    <div className="inline">
      <a href={props.href}>Погода</a>
      <br />
      <img src={props.img} />
      {props.current} Утром {props.morning}, днем {props.day}
    </div>
  );
}

export default Weather;