<!-- App.vue -->
<template>
  <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/movie">Films</router-link>|
      <router-link to="/category">Categories</router-link> |
      <router-link to="/actor">Acteurs</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>
