import axios from '../util/axios'

export function getHome (params) {
    return axios.get('/index-infos')
}