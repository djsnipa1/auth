import { goto } from '$app/navigation';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

const client_id = CLIENT_ID;
const response_type = 'code';
const redirect_uri = encodeURIComponent('http://localhost:5173');
const scope = encodeURIComponent('user-read-currently-playing user-top-read');

const authorize_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`;

// goto(authorize_url);

export const load = async () => {
	const fetchMovies = async () => {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		return data
	};

  const getAuthUrl = () => {
    return authorize_url
  }
	return {
		movies: fetchMovies(),
    authorizeUrl: getAuthUrl()
	};
};
