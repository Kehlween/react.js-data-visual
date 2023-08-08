import logo from './Kehlween.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Kehlweenr">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kehlween Zascha
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/kehlween/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
