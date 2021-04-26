import axios from '../util/axios'

export function getCategory () {  
      return axios.get('/categories')
}