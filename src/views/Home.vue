<template>
  <div class="home">
    Welcome to Full Metal Kinematics

    <h1>Members</h1>
    <ul class='member-list'>
      <li v-for='member in members'>{{ member }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
  // border: 1px solid black;
  text-align: left;
  width: 150px;
  // min-width: 150px;
}
</style>