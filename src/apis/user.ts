// 封装所有和用户相关的接口函数
import request from '@/utils/http'

export interface LoginParams {
  account: string
  password: string
}

export const loginAPI = ({ account, password }: LoginParams) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

export interface LikeListParams {
  limit?: number
}

export const getLikeListAPI = ({ limit = 4 }: LikeListParams = {}) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}

