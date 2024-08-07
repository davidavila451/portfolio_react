import {useEffect, useState} from 'react';
import axios from 'axios';

function SpotifySearchArtists(){
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);
    const [token, setToken] = useState("");

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

    const searchArtists = async (event) => {
        event.preventDefault();
        const {data} = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        });
    
        setArtists(data.artists.items);
    };
    
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return(
        <div>
            <form onSubmit={searchArtists}>
                <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
        {renderArtists()}
        </div>

    );
}

export default SpotifySearchArtists;