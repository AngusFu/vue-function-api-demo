<template>
  <div>
    <MouseApp></MouseApp>
    <hr>
    <CounterApp></CounterApp>
  </div>
</template>

<script>
import MouseApp from "./MouseApp";
import CounterApp from "./CounterApp";

export default {
  components: { MouseApp, CounterApp }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
