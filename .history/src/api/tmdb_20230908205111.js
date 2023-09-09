import axios from 'axios';

//575116826497562ff7c50b9491776a78
const apiKey = '575116826497562ff7c50b9491776a78';

export default axios.create({
 baseURL: 'https://api.themoviedb.org/3/',
 params: {
    api_key: apiKey,
 }
 });
