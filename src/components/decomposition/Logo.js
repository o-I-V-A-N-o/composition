/**
   * Компонент для размещения логотипа, слева от поисковой строки.
   *
   */
function Logo(props) {
  return (
    <div className="inline">
      <img src={props.img} />
    </div>
  );
}

export default Logo;