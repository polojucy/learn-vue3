import { onMounted, onUnmounted, Ref, ref } from 'vue'

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if(!elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = true
      } else {
        isClickOutSide.value = false
      }
    }
  }
  onMounted(() => {
    document.addEventListener("click", handler)
  })
  onUnmounted(() => {
    document.removeEventListener("click", handler)
  })
  
  return isClickOutSide
}

export default useClickOutSide