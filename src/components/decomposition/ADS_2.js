/**
   * Компонент для рекламного банера, под строкой поиска.
   *
   */
function ADS_2(props) {
  return (
    <div>
      <a href={props.href}><img src={props.img} /></a>
    </div>
  );
}

export default ADS_2;