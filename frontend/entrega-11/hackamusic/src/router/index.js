import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // Ruta Home | Top tags
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Ruta Top artistas de España
  {
    path: "/top-artists-spain",
    name: "TopArtistsSpain",
    component: () => import("../views/TopArtists.vue"),
  },
  // Ruta Top tracks de España
  {
    path: "/top-tracks-spain",
    name: "TopTracksSpain",
    component: () => import("../views/TopTracks.vue"),
  },
  // Ruta About
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  // Ruta de Error
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
