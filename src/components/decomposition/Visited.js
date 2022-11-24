/**
   * Компонент для часто посещаемых сайтов.
   *
   */
function Visited(props) {
  return (
    <div className="inline">
      <a href={props.href}>Посещаемое</a>
      <br />
      <table>
      {props.data.map((item) =>
          <tr>
            <td>
              <a href={item.href}>{item.name}</a>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Visited;