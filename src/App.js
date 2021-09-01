import logo from './logo.svg';
import './App.scss';
import { Input } from './components';

function Top() {
  return (
    <span>Span Top</span>
  );
}

function Bottom() {
  return (
    <span>Span Bottom</span>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input placeholder="Teste qualquer" content={<button>Teste aqui</button>} top={<Top />} bottom={<Bottom />} />
      </header>
    </div>
  );
}

export default App;
