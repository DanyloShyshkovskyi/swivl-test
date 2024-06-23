import axios from 'axios'

import { API_URL, GH_TOKEN } from 'shared/config'

export const apiInstance = axios.create({
  baseURL: API_URL,

  //add content type to header
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + GH_TOKEN,
  },
})
