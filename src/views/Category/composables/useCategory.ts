// 封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

// 分类数据类型
export interface CategoryData {
  name?: string
  children?: Array<{
    id: string
    name: string
    picture: string
    goods?: Array<{
      id: string
      name: string
      picture: string
      price: string
    }>
  }>
}

export function useCategory() {
  // 获取分类数据
  const categoryData = ref<CategoryData>({})
  const route = useRoute()
  const getCategory = async (id = route.params.id as string) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result as CategoryData
  }
  onMounted(() => getCategory())

  // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to: RouteLocationNormalized) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id as string)
  })
  return {
    categoryData
  }
}

