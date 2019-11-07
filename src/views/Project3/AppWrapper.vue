<template>
  <div ref=appWrapper>
      
  </div>
</template>

<script>
import Main from './App/main'
export default {
    mounted() {
        Main.$mount('#app-wrapper')
        setTimeout(() => {
            let div = this.$refs.appWrapper
            // create a shadow dom
            let shadow = div.attachShadow({mode: 'open'})
            let element = document.getElementById('app-wrapper')
            if (!element) {
                element = document.createElement('div')
                element.id = 'app-wrapper'
            }
            div.appendChild(element)
            
            let internalApp = document.getElementById('internal-app')
            shadow.appendChild(internalApp)
            shadow.appendChild(element)
        }, 1)
    }
}
</script>

<style>

</style>