import './App.css';
import Example from './components/Example';
import Items from './components/Items';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Example />
      <Items />

    </div>
  );
}

export default App;
