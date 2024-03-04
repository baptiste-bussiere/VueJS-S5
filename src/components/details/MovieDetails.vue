




 // MonComposant.vue
<template>
  <div class="composant movie">
    
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Une erreur s'est produite : {{ error }}</div>
    <div class="detailsMovie" v-else >
      <h1>{{ data.title }}</h1>
      <div>{{ data.description }}</div>
      <div>{{ data.releaseDate }}</div>
      <div>{{ data.duration }}</div>

      Les acteurs 

      <div v-for="actor in data.actor" :key="actor.id">
        <div>{{ actor }}</div>
    
        </div>
      
    
    </div>
  </div>
</template>

<script>
import callData from '../../hooks/callData';
  import {useRoute} from "vue-router";

export default {

  name: 'Movie',

  setup() {
    const { data, loading, error, fetchData } = callData();
    const route = useRoute();
const id  = route.params.id;
    

    fetchData(`http://127.0.0.1:8000/api/movies/${id}`); 

    return {
      data,
      loading,
      error
    };
  }
};
</script>

