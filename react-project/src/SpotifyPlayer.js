function Player(){
    var spotifyScript = '<script src="https://sdk.scdn.co/spotify-player.js"></script>'

    return(
        <div>
            <h2>Spotify Web Playback SDK Quick Start</h2>
            {spotifyScript}
            {
                window.onSpotifyWebPlaybackSDKReady = () => {
                    const token = 'BQAZEwkTH-rTSkNZEpgA7oz4xx32M_YJQ1_-_t9mcIwiTiSk0SV70q04MxlhOlY30f2VRHYdTZd-__k8f7PMn1DzWWLSTvopcm9A60EXoTNB9bBZECwIehmku3JIdsp4tomR_H3Husve4AHRzAWzRrEx3-F_UyATGQmsp8VlHep78Zyjdv-7tXUrx45FQKuY85z5_-zyvrU';
                    const player = new Spotify.Player({
                        name: 'Web Playback SDK Quick Start Player',
                        getOAuthToken: cb => { cb(token); },
                        volume: 0.5
                    });
                }
            }
        </div>
    );
}

export default Player