/* eslint-disable */
import Vue from "vue"
import App from "./App.vue"
import { index } from "mathjs"
import { _ } from "core-js"

Vue.config.productionTip = false

let globalData = {
    // basically constants
    units: "px",
    updateInterval: 50, // every 50 miliseconds
    robotStartLocation: [150,150],
    initialKMatrix: [1, 0, 0, 1],
    lightSize: 15,
    panelHiddenPercent: .7,
    speed: 1,
    // system updated vars
    fieldHeight: 2000,
    fieldWidth: 2800,
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
    methods: {
    },
    created() {
        setInterval(() => {
            let shiftAmount = 50
            try {
                let panel = document.getElementById('panel')
                shiftAmount = panel.clientWidth * (1- globalData.panelHiddenPercent)
            } catch (e) {
            }
            globalDataModifier.global.fieldHeight = this.$el.clientHeight
            globalDataModifier.global.fieldWidth  = this.$el.clientWidth - shiftAmount
        }, 1000)
    },
    render: h => h(App),
})
