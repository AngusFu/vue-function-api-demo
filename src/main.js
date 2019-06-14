import Vue from 'vue-fapi'
import MouseApp from './MouseApp'
import CounterApp from './CounterApp'

Vue.config.productionTip = false

new Vue({ render: h => h('div', null, [h(CounterApp), h(MouseApp)]) }).$mount(
  '#app'
)
