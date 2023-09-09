import axios from 'axios';

//575116826497562ff7c50b9491776a78
const apiKey = '575116826497562ff7c50b9491776a78';

//token de leitura 
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUxMTY4MjY0OTc1NjJmZjdjNTBiOTQ5MTc3NmE3OCIsInN1YiI6IjY0ZmJiMjkzZGMxY2I0MDBiMGJhZGQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3x3rR_CoMvxQV6SGmCUekPfNU2EpVqE64ttW6GFD3XE

export default axios.create({
 baseURL: 'https://api.themoviedb.org/3/',
 params: {
    api_key: apiKey,
 }
 });
