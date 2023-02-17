import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://br-4.network.logichost.com.br:15539/',
})
