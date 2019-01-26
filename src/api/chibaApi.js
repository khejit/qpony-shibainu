import axios from 'axios';

const chibaApi = axios.create({
    baseURL: 'https://dog.ceo/api/breed/shiba/images/random'
});

export default chibaApi