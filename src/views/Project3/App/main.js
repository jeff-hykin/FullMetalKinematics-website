import Vue from "vue"
import App from "./App.vue"
import { index } from "mathjs"
import { _ } from "core-js"

Vue.config.productionTip = false

let globalData = {
    robots: [],
    units: "px",
    fieldHeight: 600,
    fieldWidth: 800,
    updateInterval: 20, // every 20 miliseconds
}
Vue.mixin({
    data: ()=>globalData,
})

export default new Vue({
    methods: {},
    created() {},
    render: h => h(App),
})
