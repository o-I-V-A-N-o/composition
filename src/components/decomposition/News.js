/**
   * Компонент для размещения новостей.
   *
   */
function News(props) {
  return (
    <div className="inline">
      <table>
      {props.data.map((item) =>
          <tr>
            <td>
              <a href={item.href}><img src={item.img}/>{item.name}</a>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default News;