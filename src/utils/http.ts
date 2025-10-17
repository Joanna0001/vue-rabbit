// axios基础的封装
import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'

// 定义响应数据的通用接口
export interface ApiResponse<T = unknown> {
  code: string | number
  message: string
  data: T
}

// 定义错误响应数据结构
interface ErrorResponse {
  message: string
  code?: string | number
  [key: string]: unknown
}

// 创建 axios 实例
const httpInstance: AxiosInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
  }
)

// axios响应拦截器
httpInstance.interceptors.response.use(
  <T = unknown>(response: AxiosResponse<T>): T => {
    return response.data
  },
  (error: AxiosError<ErrorResponse>): Promise<AxiosError> => {
    // 统一错误提示
    const message = error.response?.data?.message || error.message || '请求失败'
    ElMessage({
      type: 'warning',
      message
    })
    return Promise.reject(error)
  }
)

export default httpInstance