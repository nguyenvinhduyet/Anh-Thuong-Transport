import Vue from "vue";
import VueRouter from "vue-router";
import Itinerary from "../views/Itinerary.vue";
import truck_60596 from "../views/truck_60596.vue"
import truck_07677 from "../views/truck_07677.vue"
import truck_46295 from "../views/truck_46295.vue"
import truck_other from "../views/truck_other.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Itinerary",
    component: Itinerary,
  },
  {
    path: "/truck-51C60596",
    name: "truck_60596",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: truck_60596,
  },
  {
    path: "/truck-51D46295",
    name: "truck_46295",
    component: truck_46295,
  },
  {
    path: "/truck-50H07677",
    name: "truck_07677",
    component: truck_07677,
  },
  {
    path: "/truck-other",
    name: "truck_other",
    component: truck_other,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
