import Vue from "vue"
import App from "./App.vue"
import { index } from "mathjs"
import { _ } from "core-js"

Vue.config.productionTip = false

let globalData = {
    // basically constants
    units: "px",
    fieldHeight: 2000,
    fieldWidth: 2800,
    updateInterval: 20, // every 20 miliseconds
    robotStartLocation: [50,50],
    initialKMatrix: [1, 0, 0, 1],
    lightSize: 7.5,
    // actual data
    robots: [],
}
let globalDataModifier
Vue.mixin({
    data() {
        globalDataModifier = this
        return {global: globalData}
    },
})

export default new Vue({
    methods: {},
    created() {
        setInterval(() => {
            globalDataModifier.global.fieldHeight = this.$el.clientHeight
            globalDataModifier.global.fieldWidth  = this.$el.clientWidth / 2
        }, 1000);
    },
    render: h => h(App),
})
