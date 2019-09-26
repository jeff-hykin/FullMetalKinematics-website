import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSimpleMarkdown from 'vue-simple-markdown'
import Markdown from '@/components/Markdown'

Vue.use(VueSimpleMarkdown)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  components: {
      markdown: Markdown
  }
}).$mount('#app')
