import { value, onMounted, onUnmounted } from "vue-fapi";

export default function useMouse() {
  const x = value(200);
  const y = value(200);
  const disabled = value(true);
  const update = e => {
    if (!disabled.value) {
      x.value = e.pageX;
      y.value = e.pageY;
    }
  };
  const toggle = () => (disabled.value = !disabled.value);
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });
  return { x, y, toggle, disabled };
}
