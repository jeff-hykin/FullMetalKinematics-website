<template>
  <nav>
      <img alt="FMK logo" src="../assets/logo_slogan_light.png" width='250px'>
      <div>
        <router-link v-for='page in pages' :to='page.location' class='nav-link'>{{ page.name }}</router-link>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            pages: [
                {
                    name: 'Home',
                    location: '/'
                },
                {
                    name: 'About',
                    location: '/about'
                },
                {
                    name: 'Project 1',
                    location: '/project1'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-link {
  margin: 8px;
}
</style>