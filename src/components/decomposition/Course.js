/**
   * Компонент для показа курсов валют.
   *
   */
function Course(props) {
  
  return (
    <div>
      <table>
        <tr>
          {props.data.map((item) => 
            <td>
              {item.name} {item.price},
            </td>
          )}
          <td>...</td>
        </tr>
      </table>
    </div>
  );
}

export default Course;