import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI, type Category } from '@/apis/category'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref<Category[]>([])

  const getCategoryList = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategoryList,
  }
})