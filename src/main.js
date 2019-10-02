import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueSimpleMarkdown from 'vue-simple-markdown'
Vue.use(VueSimpleMarkdown)

import Markdown from '@/components/Markdown'

import GoodVue from 'good-vue'
Vue.use(GoodVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  components: {
      markdown: Markdown
  }
}).$mount('#app')
