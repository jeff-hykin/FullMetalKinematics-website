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
</style>
