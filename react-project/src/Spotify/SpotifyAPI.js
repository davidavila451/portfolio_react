import SpotifySearchArtists from './SpotifySearchArtist';
import GetRefreshToken from './GetRefreshToken';
import {useEffect, useState} from 'react';



function SpotifyAPI(){
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const [token, setToken] = useState("");

    //Get Access Token
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);
    }, []);

    //Handle Logout
    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    //Display Logout if Login was successful
    return(
        <div>
            <GetRefreshToken />
            <SpotifySearchArtists />
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                : <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default SpotifyAPI;