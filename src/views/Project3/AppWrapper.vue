<template>
    <div class=fullscreen>
        <div ref=appWrapper>
        </div>
    </div>
</template>

<script>
import Main from './App/main'
export default {
    methods: {
        tryLoadingMain() {
            if (this.$refs.appWrapper) {
                this.main = Main.$mount(this.$refs.appWrapper)
            }
            if (!this.main) {
                this.setupTimer()
            }
        },
        setupTimer() {
            setTimeout(this.tryLoadingMain, 500)
        }
    },
    mounted() {
        this.setupTimer()
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