import { createWebHistory, createRouter } from "vue-router";


import Home from "../components/views/Home.vue"
import Movie from "../components/views/Movie.vue"
import Actor from "../components/views/Actor.vue"
import Category from "../components/views/Category.vue"
import MovieDetails from "../components/details/MovieDetails.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/actor",
    name: "Actor",
    component: Actor,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/movie/details/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;