/**
   * Компонент для СМИ и текущей даты.
   *
   */
function SMI(props) {
  return (
    <div>
      <table>
      <tr>
          {props.data.map((item) =>
            <td>
              <a href={item.href}><img src={item.img}/>{item.name}</a>
            </td>
          )}
          <td>{new Date().toLocaleString()}</td>
        </tr>
      </table>
    </div>
  );
}

export default SMI;