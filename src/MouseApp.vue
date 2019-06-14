<template>
  <div>
    <label>
      <input type="checkbox" :checked="disabled.value" @change="toggle">
      {{ disabled.value ? '禁用' : '启用' }} Mouse APP
    </label>
    <div :style="style.value">Area of square is:{{ area.value }}</div>
  </div>
</template>

<script>
import { computed } from "vue-fapi";
import useMouse from "./useMouse";

export default {
  setup() {
    const { x, y, toggle, disabled } = useMouse();
    const area = computed(() => x.value * y.value);
    const style = computed(() => ({
      textAlign: "center",
      fontSize: "20px",
      color: "#fff",
      background: "red",
      width: this.x.value + "px",
      height: this.y.value + "px",
      lineHeight: this.y.value + "px"
    }));

    return { x, y, area, style, toggle, disabled };
  }
};
</script>
