import { reactive, onMounted, onUnmounted, toRefs } from 'vue'

function useMousePosition() {
    const posistion = reactive({
      x: 0,
      y: 0,
    })
    const updatePosistion = (e: MouseEvent) => {
      posistion.x = e.pageX
      posistion.y = e.pageY
    }
    onMounted(() => {
      document.addEventListener('click', updatePosistion)
    })
    onUnmounted(() => {
      document.removeEventListener('click', updatePosistion)
    })

    return {
      ...toRefs(posistion)
    }
}

export default useMousePosition