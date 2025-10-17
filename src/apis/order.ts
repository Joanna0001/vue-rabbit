import request from '@/utils/http'

export interface UserOrderParams {
  orderState?: number
  page: number
  pageSize: number
}

export const getUserOrder = (params: UserOrderParams) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}

