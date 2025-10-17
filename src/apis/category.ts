import request from '@/utils/http'
import type { ApiResponse } from '@/utils/http'

export interface Category {
  id: string
  name: string
  picture: string
  parentId?: string
  parentName?: string
  children?: Category[]
}

// 获取-全部分类(包含推荐商品)
export function getCategoryListAPI(): Promise<ApiResponse<Category[]>> {
  return request({
    url: '/home/category/head'
  })
}

// 获取-二级分类列表
export function getCategoryAPI (id: string) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {string} id 分类id 
 * @return {*}
 */
export const getCategoryFilterAPI = (id: string) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
 *   categoryId: 1005000 ,
 *   page: 1,
 *   pageSize: 20,
 *   sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 * } 
 * @return {*}
 */
export interface SubCategoryParams {
  categoryId: number | string
  page: number
  pageSize: number
  sortField?: 'publishTime' | 'orderNum' | 'evaluateNum'
}

export const getSubCategoryAPI = (data: SubCategoryParams) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}

