import axios from 'axios';

//c5568d6e77039a6978ff01e662ba04a1
const apiKey = 'c5568d6e77039a6978ff01e662ba04a1';

const instance = axios.get({
 baseURL: 'https://api.themoviedb.org/3/',
 params: {
    api_key: apiKey,
 }
 });
