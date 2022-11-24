import './App.css';
import Cards from './components/cards/Cards';
//import Decomposition from './components/decomposition/Decomposition';

function App() {
  
  const cards_data = {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    href: 'http://localhost:3000'
  }
  
  return (
    <div className="App">
      
      <Cards {...cards_data} >
        <img src="..." class="card-img-top" alt="..." />
      </Cards>

      {/*
      <Cards {...cards_data} >
        <img src="..." class="card-img-top" alt="..." />
      </Cards>
      */}
      {/*<Decomposition />*/}
    </div>
  );
}

export default App;
