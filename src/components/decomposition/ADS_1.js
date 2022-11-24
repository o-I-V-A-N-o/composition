/**
   * Компонент для рекламного банера, справа от блока новостей.
   *
   */
function ADS_1(props) {
  return (
    <a href={props.href}>
      <div className="inline">
        <img src={props.img} />
        <h3>{props.title}</h3>
        <h4>{props.text}</h4>
      </div>
    </a>
  );
}

export default ADS_1;