import http from './httpService';
import config from '../config.json'
export default function getPerson(id){
    console.log(config.apiEndpoint)
    return http.get(`${config.apiEndpoint}${id}`)
}

