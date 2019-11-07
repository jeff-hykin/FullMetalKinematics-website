import Vue from "vue"
import App from "./App.vue"
import { index } from "mathjs"
import { _ } from "core-js"

Vue.config.productionTip = false

let globalData = {
    // basically constants
    units: "px",
    fieldHeight: 600,
    fieldWidth: 800,
    updateInterval: 20, // every 20 miliseconds
    robotStartLocation: [50,50],
    initialKMatrix: [1, 0, 0, 1],
    lightSize: 7.5,
    // actual data
    robots: [],
}
Vue.mixin({
    data: ()=>globalData,
})

export default new Vue({
    methods: {},
    created() {},
    render: h => h(App),
})
