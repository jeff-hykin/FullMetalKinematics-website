<template>
    <b-nav>
        <router-link v-for='page in pages' :to='page.location' class='nav-link'>{{ page.name }}</router-link>
    </b-nav>
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
                    name: 'Projects',
                    location: '/Projects'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
}

.nav-link {
  margin: 8px;
}
</style>