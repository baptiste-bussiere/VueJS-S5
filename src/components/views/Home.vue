<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <section class="landing">
      <h1>Bienvenue sur YouMovie</h1>
  </section>
  <section class="lastMovie">

  </section>
  <section class="biggestActor">

  </section>
  

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
