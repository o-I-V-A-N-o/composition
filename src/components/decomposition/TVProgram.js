/**
   * Компонент для TV программ.
   *
   */
function TVProgram(props) {
  return (
    <div className="inline">
      <a href={props.href}>Телепрограмма</a>
      <br />
      <table>
      {props.data.map((item) =>
          <tr>
            <td>
              <a href={item.href}>{item.time} {item.name} {item.channel}</a>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default TVProgram;