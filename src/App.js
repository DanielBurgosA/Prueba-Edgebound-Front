import './App.css';
import Home from './Views/Home/home';
import PokemonProvider from './context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <Home/>
      </div>
    </PokemonProvider>
  );
}

export default App;
