import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        CENTRO DE MANDO
      </header>
      <nav>
        <input type="text" placeholder='Buscar sucursal'/>
      </nav>
    <section className='card-container-grid'>
      <Card />
    </section>
    </div>
  );
}

export default App;
