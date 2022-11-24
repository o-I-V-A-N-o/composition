/**
   * Компонент для карты.
   *
   */
function Maps(props) {
  return (
    <div className="inline">
      <a href={props.href}>Карта</a>
      <br />
      <a href={props.data.href}>{props.data.name}</a>
    </div>
  );
}

export default Maps;