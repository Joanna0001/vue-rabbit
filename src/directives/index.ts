// 定义懒加载插件
import type { App } from 'vue'

export const lazyPlugin = {
  install(app: App) {
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el: HTMLImageElement, binding) {
        // 使用 Intersection Observer API
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0]
            if (entry && entry.isIntersecting) {
              // 当图片进入视口时加载图片
              el.src = binding.value
              // 停止观察
              observer.unobserve(el)
            }
          },
          {
            threshold: 0.01,
          }
        )
        // 开始观察
        observer.observe(el)
      },
    })
  },
}

