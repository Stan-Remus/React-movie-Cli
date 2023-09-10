import axios from 'axios';


export default axios.create({
    baseURL: 'https://draconian-advertisement-production.up.railway.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})