import axios from 'axios'

const api = axios.create({
    baseURL: 'http://177.47.86.198:3333/'
})

export default api