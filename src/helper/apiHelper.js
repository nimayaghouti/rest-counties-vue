import axios from 'axios'
import useLoading from '@/composable/useLoading'

const { setIsLoading } = useLoading()

const BASE_URL = 'https://restcountries.com/v3.1'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

instance.interceptors.request.use(
  config => {
    setIsLoading(true)
    return config
  },
  error => {
    setIsLoading(false)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  response => {
    setIsLoading(false)
    return response
  },
  error => {
    setIsLoading(false)
    return Promise.reject(error)
  },
)

export default instance
