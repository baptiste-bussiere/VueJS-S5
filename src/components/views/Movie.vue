// MonComposant.vue
<template>
  <div class="composant movie">
    <h1>Tous nos films</h1>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Une erreur s'est produite : {{ error }}</div>
    <div class="cardContainer" v-else >
      
      <router-link  v-for="item in data" :key="item.id" class="moviecard card" :to="`/movie/details/${item.id}`">
        <div>
                  <img :src="`/dataImg/movie/${item.id}.webp`" alt="">

          
        <h2>{{ item.title }}</h2>  

        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import callData from '../../hooks/callData';

export default {
  name: 'Movie',
  setup() {
    const { data, loading, error, fetchData } = callData();

    fetchData('http://127.0.0.1:8000/api/movies'); 

    return {
      data,
      loading,
      error
    };
  }
};
</script>
