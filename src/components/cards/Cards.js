import '../../css/bootstrap.min.css';

function Cards(props) {
  
  return (
    <div>
      <div class="card">
        {props.children}
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href={props.href} class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

Cards.defaultProps = {
  children: null,
  title: 'Card title',
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  href: '#'
};

export default Cards;