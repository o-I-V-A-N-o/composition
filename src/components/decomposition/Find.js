/**
   * Компонент для поисковой строки.
   *
   */
function Find(props) {
  return (
    <div>
      <input type="text" />
      <br />
      {props.data}
    </div>
  );
}

export default Find;