// 封装购物车相关接口
import request from '@/utils/http'
import type { CartItem } from '@/stores/cartStore'

// 加入购物车
export const insertCartAPI = ({ skuId, count }: { skuId: string; count: number }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
  return request<CartItem[]>({
    url: '/member/cart'
  })
}

// 删除购物车
export const delCartAPI = (ids: string[]) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data: Array<{ skuId: string; selected: boolean; count: number }>) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}

