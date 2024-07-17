import logo from './compact-disc-solid.svg';
import SpotifyAPI from './Spotify/SpotifyAPI';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Waynes Music Player
        </p>
        <SpotifyAPI />
      </header>
    </div>
  );
}

export default App;
