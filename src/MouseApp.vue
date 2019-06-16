<template>
  <div>
    <div :style="style.value">
      S
      <sub>rect</sub>
      = {{ area.value }}
    </div>

    <label>
      <input type="checkbox" :checked="disabled.value" @change="toggle">
      {{ disabled.value ? '禁用' : '启用' }} Mouse APP
    </label>
  </div>
</template>

<script>
import { computed } from "vue-functional-api";
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
