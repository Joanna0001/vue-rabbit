import request from '@/utils/http'

// 获取详情接口
export const getCheckInfoAPI = () => {
  return request({
    url: '/member/order/pre'
  })
}

// 创建订单参数类型
export interface CreateOrderParams {
  deliveryTimeType: number
  payType: number
  payChannel: number
  buyerMessage: string
  goods: Array<{
    skuId: string
    count: number
  }>
  addressId: string
}

// 创建订单
export const createOrderAPI = (data: CreateOrderParams) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}

