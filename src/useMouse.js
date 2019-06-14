import { value, onMounted, onUnmounted } from 'vue-fapi'

export default function useMouse() {
  const x = value(200)
  const y = value(200)
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}
