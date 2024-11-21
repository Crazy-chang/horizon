import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { toast, Storage } from '@/utils'
import { UpdateConfig } from 'wailsjs/go/bridge/App'
import { refreshToken } from '@/api/login'
import { USER_CONFIG_ENUM } from '@/types/config'

const httpRequest: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 15000,
})

let isRefreshing: boolean = false
let queue: Array<any> = []

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    const { response } = error
    const statusCode = response?.status

    console.log(response)

    if (statusCode === 401) {
      const XJikeAccessToken: string = Storage.get('x-jike-access-token')
      const XJikeRefreshToken: string = Storage.get('x-jike-refresh-token')

      const params = {
        'x-jike-access-token': XJikeAccessToken,
        'x-jike-refresh-token': XJikeRefreshToken,
      }

      try {
        if (!isRefreshing) {
          isRefreshing = true

          return refreshToken(params)
            .then((res) => {
              const XJikeAccessToken = res.data['x-jike-access-token']
              const XJikeRefreshToken = res.data['x-jike-refresh-token']

              UpdateConfig(
                USER_CONFIG_ENUM.accessToken,
                XJikeAccessToken,
              ).then()
              UpdateConfig(
                USER_CONFIG_ENUM.refreshToken,
                XJikeRefreshToken,
              ).then()

              Storage.set('x-jike-access-token', XJikeAccessToken)
              Storage.set('x-jike-refresh-token', XJikeRefreshToken)

              if (response) {
                response.headers['x-jike-access-token'] = XJikeAccessToken
              }

              queue.forEach((cb) => {
                cb(response)
              })
              queue = []

              return response
            })
            .catch((err) => {
              console.error(err)
              window.location.href = '/#/login'
              return Promise.reject(err)
            })
            .finally(() => {
              isRefreshing = false
            })
        } else {
          return new Promise((resolve) => {
            if (response) {
              queue.push((token: string) => {
                response.headers['x-jike-access-token'] = token
                resolve(httpRequest(response))
              })
            }
          })
        }
      } catch (err) {
        console.error(err)
      }
    }

    if (statusCode && statusCode >= 500) {
      toast('服务器开小差了')
    }

    if (response) {
      return Promise.reject(response.data)
    }
  },
)

httpRequest.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const XJikeAccessToken: string = Storage.get('x-jike-access-token')

    config.headers['x-jike-access-token'] = `${XJikeAccessToken}`

    return config
  },
  (err) => {
    console.error(err)
    return Promise.reject(err)
  },
)

export default httpRequest
