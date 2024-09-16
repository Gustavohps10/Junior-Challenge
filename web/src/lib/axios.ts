import axios from 'axios'
import Cookies from 'js-cookie'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_BASE_URL + '/api',
  withCredentials: true,
})

api.defaults.headers.common.Authorization = `Bearer ${Cookies.get('token')}`
