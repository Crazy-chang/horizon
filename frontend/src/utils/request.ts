import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast, Storage } from '@/utils'
import { userType } from '@/types/user'

const httpRequest: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 15000,
})

const { XJikeAccessToken, XJikeRefreshToken } = Storage.get('user_info')

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('MAYDAY', response)
    const statusCode: number = response.status

    // if (statusCode === 208) {
    //   return message.error('登录过期,请重新登录', 2, () => {
    //     logOut()
    //   })
    // }

    if (statusCode == 200) {
      return response.data
    }

    return response
  },
  (error: any) => {
    const { response } = error
    if (response) {
      toast('网络开小差了')

      return Promise.reject(response.data)
    }
  },
)

httpRequest.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    // TODO: check token
    // const ST = getToken('token')
    // const location = useLocation()

    // if (!ST) {
    //   message.error("登录过期，请重新登录")
    //   setTimeout(() => {
    //     logOut()
    //   }, 2000)
    // }

    // config.headers.token = `${ST}`
    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  },
)

export default httpRequest
