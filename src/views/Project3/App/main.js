import Vue from 'vue'
import App from './App.vue'
import Robot from './scripts/Robot'
import { index } from 'mathjs'

Vue.config.productionTip = false

export default new Vue({
  data: {
    robots: []
  },
  methods: {
    addRobot: function(x, y, k11, k12, k21, k22) {
      this.robots.push(new Robot(x, y, k11, k12, k21, k22))
    },
    removeRobot: function(id) {
      let ind = -1
      for(let i = 0; i < this.robots.length; i++) {
        if(this.robots[i].id == id) {
          ind = i
          break
        }
      }
      this.robots.splice(ind, 1)
    },
    updateRobotKVal(id, k1, k2, newVal) {
      for(let i = 0; i < this.robots.length; i++) {
        if(this.robots[i].id == id) {
          this.robots[i].K.subset(index(k1, k2), newVal)
          break
        }
      }
    },
    updateRobotXY(id, x, y) {
      for(let i = 0; i < this.robots.length; i++) {
        if(this.robots[i].id == id) {
          this.robots[i].updateXY(x, y)
          break
        }
      }
    }
  },
  render: h => h(App),
})
