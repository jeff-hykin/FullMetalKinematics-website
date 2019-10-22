<template>
    <column shadow=2 v-bind="$attrs">
        <slot/>
    </column>
</template>

<style scoped>
* {
    max-width: 30rem;
    text-align: left;
    margin: 1.1rem 1.7rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
}
</style>