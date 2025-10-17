import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 购物车商品类型定义
interface CartItem {
  skuId: string
  name: string
  picture: string
  price: number
  count: number
  attrsText: string
}

export const useCartStore = defineStore('cart', () => {
  // 购物车列表
  const cartList = ref<CartItem[]>([])

  // 计算总数量
  const allCount = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.count, 0)
  })

  // 计算总价格
  const allPrice = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.price * item.count, 0)
  })

  // 删除购物车商品
  const delCart = (skuId: string) => {
    const index = cartList.value.findIndex((item) => item.skuId === skuId)
    if (index > -1) {
      cartList.value.splice(index, 1)
    }
  }

  return {
    cartList,
    allCount,
    allPrice,
    delCart,
  }
})