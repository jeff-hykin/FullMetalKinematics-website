
<template>
    <row> <!-- this wrapper protects from css classes -->
        <row class=container align-v=bottom shadow=2> 
            <linkage transform-origin='bottom center' transform='rotate(45deg)' />
        </row>
    </row> 
</template>

<script>
import Linkage from './Linkage'
export default {
    components: { Linkage }
}
</script>

<style scoped>
.container {
    width: 20rem;
    height: 20rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
}
</style>