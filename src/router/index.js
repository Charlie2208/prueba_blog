import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import OpinionesViews from "../views/OpinionesViews.vue";
import AdministracionView from "../views/AdministracionView.vue";
import EditandoView from "../views/EditandoView.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: ["/inicio", "/home"],
    component: HomeView,
  },
  {
    path: "/opiniones",
    name: "opiniones",
    component: OpinionesViews,
  },
  {
    path: "/administracion",
    name: "administracion",
    component: AdministracionView,
  },
  {
    path: "/editando/:id",
    name: "editando",
    props: true,
    component: EditandoView,
  },
  {
    path: "/*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
