import {useEffect, useState} from 'react';
import {Buffer} from 'buffer';
import querystring from 'query-string';
import axios from 'axios';

function GetRefreshToken(){
    const refreshToken = async () => {
        var scope = 'user-read-private user-read-email'
        var redirect_uri = "http://localhost:3000";

        console.log(
            await axios.post(
                'https://accounts.spotify.com/api/token',
                {
                    code: code,
                    redirect_uri: redirect_uri,
                    grant_type: 'authorization_code'
                }
            )
        );
    }

    return(
        <div>
            <button onClick={refreshToken}>Get Refresh Token</button>
        </div>
    );
}

export default GetRefreshToken;