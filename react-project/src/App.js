import logo from './compact-disc-solid.svg';
import './App.css';
import Player from './SpotifyPlayer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Player />
        <p>
          Welcome to Waynes Music Player
        </p>
      </header>
    </div>
  );
}

export default App;
