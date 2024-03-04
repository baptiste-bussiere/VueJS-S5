<!-- Movie.vue -->
<template>
  <div class="composant">
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Une erreur s'est produite : {{ error }}</div>
    <div class="detailsMovie" v-else>
      <div class="left">
        <img :src="`/dataImg/movie/${data.id}.webp`" alt="" />
      </div>
      <div class="right">
        <router-link to="/movie">
          <span>< Revenir aux films</span>
        </router-link>
        <h1>{{ data.title }}</h1>
        <h3>Description :</h3>

        <div>{{ data.description }}</div>

        <h3>Date de sortie :</h3>
        <div>{{ data.releaseDate }}</div>

        <h3>Durée : {{ data.duration }} minutes</h3>

        <div class="actorContainer">
          <h2>Acteurs</h2>
          <div class="actors">
            <div class="actor" v-for="actor in data.actor" :key="actor.id">
              <img src="/dataImg/actors/avatar.png" alt="" />
              <div>{{ actor.name }}</div>
              <div v-if="actorDetails[actor.id]">
                {{ actorDetails[actor.id].firstName }}
                {{ actorDetails[actor.id].lastName }}
              </div>
              <div v-else>Chargement des détails de l'acteur...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import callData from "../../hooks/callData";
import { useRoute } from "vue-router";

export default {
  name: "Movie",

  setup() {
    const { data, loading, error, fetchData, fetchActorDetails } = callData();
    const route = useRoute();
    const id = route.params.id;

    fetchData(`http://127.0.0.1:8000/api/movies/${id}`);

    const actorDetails = {};

    if (data && data.actor) {
      data.actor.forEach(async (actor) => {
        const details = await fetchActorDetails(actor.id);
        actorDetails[actor.id] = details;
      });
    }

    return {
      data,
      loading,
      error,
      actorDetails,
    };
  },
};
</script>

<style scoped>
/* Styles CSS pour le composant Movie */
</style>
