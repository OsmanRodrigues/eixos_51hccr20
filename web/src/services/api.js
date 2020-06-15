import axios from 'axios';

const api = axios.create({
    baseURL: "https://hackccr20-62d92.firebaseio.com"
});
export default api