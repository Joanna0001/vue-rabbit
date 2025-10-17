import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryListAPI, type Category } from '@/apis/category'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref<Category[]>([])

  const getCategory = async () => {
    const res = await getCategoryListAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory,
  }
})