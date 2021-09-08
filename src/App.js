import './App.scss';
import './assets/css/main.scss';
import { Button } from './components/Buttons';

function App() {
  const alerting = () => alert('Teste');
  const aalerting = () => alert('Testeeee');
  const oncontext = event => {
    event.preventDefault();
    console.log('direito clicado');
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button
          lg
          label="Teste qualquer"
          iconLeft="user"
          onClick={() => alerting()}
          onDoubleClick={() => aalerting()}
          onContextMenu={(event) => oncontext(event)}
        />
      </header>
    </div>
  );
}

export default App;
