<template>
  <row id="internal-app" width=100vw height=100vh>
    <Field class='half'></Field>
    <Controls class='half'></Controls>
  </row>
</template>

<script>
import Field from './components/Field.vue'
import Controls from './components/Controls.vue'

export default {
  name: 'app',
  components: {
    Field,
    Controls
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
  display: flex;
}

.half {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
