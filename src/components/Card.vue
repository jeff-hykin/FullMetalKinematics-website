<template>
    <paper class=card align-v=top align-h=left v-bind="$attrs">
        <slot />
    </paper>
</template>

<script>
import Paper from './Paper'
export default {
    components: { Paper }
}
</script>
<style>
.card {
    min-width: fit-content;
    width: 10rem;
    max-width: 30rem;
    margin: 1.1rem 1.7rem;
    text-align: left;
    box-sizing: content-box;
}
</style>