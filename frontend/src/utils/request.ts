import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const httpRequest: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
})

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    const statusCode = response?.data?.code || response?.data?.retCode

    if (!statusCode) {
      return Promise.reject(response.data)
      // return response.data
    }

    // if (statusCode === 208) {
    //   return message.error('登录过期,请重新登录', 2, () => {
    //     logOut()
    //   })
    // }

    // if (statusCode !== 200) {
    //   message.warning(`${response.data.data || response.data.message}`)

    //   return Promise.reject(response.data)
    // }

    if (statusCode == 200) {
      return response.data
    }

    return response
  },
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      console.log('网络开小差了')

      // message.error('网络开小差了~')
      return Promise.reject(response.data)
    }
  }
)

httpRequest.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
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
  }
)

export default httpRequest
