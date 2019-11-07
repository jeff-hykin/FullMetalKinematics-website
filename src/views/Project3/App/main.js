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
    updateInterval: 50, // every 20 miliseconds
    robotStartLocation: [50,50],
    initialKMatrix: [1, 0, 0, 1],
    lightSize: 7.5,
    panelHiddenPercent: .7,
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
            let shiftAmount = 50
            try {
                let panel = document.getElementById('panel')
                shiftAmount = panel.clientWidth * (1- globalData.panelHiddenPercent)
            } catch (e) {
            }
            console.log(`shiftAmount is:`,shiftAmount)
            globalDataModifier.global.fieldHeight = this.$el.clientHeight
            globalDataModifier.global.fieldWidth  = this.$el.clientWidth - shiftAmount
        }, 1000);
    },
    render: h => h(App),
})
