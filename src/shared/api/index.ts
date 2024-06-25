import axios from 'axios'

import { API_URL, GH_TOKEN } from 'shared/config'

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: GH_TOKEN ? 'Bearer ' + GH_TOKEN : undefined,
  },
})
