import {useEffect, useState} from 'react';
import axios from 'axios';

function SpotifyGetCurrentTrack(){
    const CLIENT_ID = "b3016ae17633430fb6949639de1861fe";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const [token, setToken] = useState("");
    const [track, setTrack] = useState([]);

    //Get the Current Playing Track
    const getCurrentTrack = async (e) => {
        e.preventDefault();
        const {data} = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });

        setTrack(data.track.items);
    };

    const renderTrack = () => {
        {this.getCurrentTrack()}
    
        return track.map(curTrack => (
            <div key={curTrack.id}>
                {curTrack.images.length ? <img width={"100%"} src={curTrack.images[0].url} alt=""/> : <div>No Image</div>}
                {curTrack.name}
            </div>
        ))
    }
}

export default SpotifyGetCurrentTrack;