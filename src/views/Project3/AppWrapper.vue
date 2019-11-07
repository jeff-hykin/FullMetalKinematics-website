<template>
    <div class=fullscreen>
        <div ref=appWrapper>
        </div>
    </div>
</template>

<script>
import Main from './App/main'
export default {
    mounted() {
        this.main = Main.$mount(this.$refs.appWrapper)
    }
}
</script>

<style>
    .fullscreen {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
    }
</style>