import request from '@/utils/http'

export const getDetail = (id: string) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export interface HotGoodsParams {
  id: string
  type: number | string
  limit?: number
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }: HotGoodsParams) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}

