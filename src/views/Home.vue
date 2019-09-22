<template>
  <div class="home">
      
    <Logo />
    
    <div style="padding: 5rem">
        Welcome to Full Metal Kinematics
    </div>

    <h3>Members</h3>
    <ul class='member-list'>
      <li v-for='member in members'>{{ member }}</li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Logo from "@/components/Logo.vue"

export default {
  name: 'home',
  components: {
    HelloWorld,
    Logo
  },
  data () {
    return {
      members: ['Thomas McDonald', 'Jon Williamson', 'Jeff Hykin', 'Mitchell Eldridge', 'Alejandro Londono']
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.member-list {
  text-align: left;
}
</style>