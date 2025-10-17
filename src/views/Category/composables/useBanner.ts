// 封装banner轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

interface Banner {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

export function useBanner() {
  const bannerList = ref<Banner[]>([])

  const getBanner = async () => {
    const res = await getBannerAPI<Banner[]>({
      distributionSite: '2'
    })
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}

