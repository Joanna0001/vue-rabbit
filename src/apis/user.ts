// 封装所有和用户相关的接口函数
import request, { type ApiResponse } from '@/utils/http'

export interface LoginParams {
  account: string
  password: string
}

export interface UserInfo {
  id?: string
  account?: string
  nickname?: string
  avatar?: string
  token?: string
  mobile?: string
  birthday?: string
  cityCode?: string
  provinceCode?: string
  gender?: string
  profession?: string
}

export const loginAPI = ({ account, password }: LoginParams): Promise<ApiResponse<UserInfo>> => {
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

