// MonComposant.vue
<template>
  <div>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Une erreur s'est produite : {{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.firstName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import callData from '../../hooks/callData';

export default {
  name: 'Actor',
  setup() {
    const { data, loading, error, fetchData } = callData();

    fetchData('http://127.0.0.1:8000/api/actors'); 

    return {
      data,
      loading,
      error
    };
  }
};
</script>
