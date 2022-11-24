/**
   * Компонент для прямых эфиров.
   *
   */
function Live(props) {
  return (
    <div className="inline">
      <a href={props.href}>Эфир</a>
      <br />
      <table>
      {props.data.map((item) =>
          <tr>
            <td>
              <a href={item.href}><img src="https://link_on_image" /> {item.name} {item.channel}</a>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Live;