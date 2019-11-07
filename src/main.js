import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Baseline
import 'css-baseline/css/3.css'

// Lightweight non-global-css library
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'
Vue.use(KeenUI)

// Rows and Columns
import GoodVue from 'good-vue'
Vue.use(GoodVue)


import VueSimpleMarkdown from 'vue-simple-markdown'
Vue.use(VueSimpleMarkdown)

import Markdown from '@/components/Markdown'


Vue.config.productionTip = false

new Vue({
    data: ()=>({
        hi:1
    }),
  router,
  render: h => h(App),
  components: {
      markdown: Markdown
  }
}).$mount('#app')
