/**
   * Компонент для элементов навигации по сайту.
   *
   */
function Navigation(props) {
  return (
    <div>
      <table>
      <tr>
          {props.data.map((item) =>
            <td>
              <a href={item.href}><img src={item.img}/>{item.name}</a>
            </td>
          )}
        </tr>
      </table>
    </div>
  );
}

export default Navigation;