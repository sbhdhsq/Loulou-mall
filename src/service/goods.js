import axios from '../util/axios'

export function getCategory () {
    return axios.get('/categories')
}

export function search (params) {
    return axios.get('/search', { params })
}