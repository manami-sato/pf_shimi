/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";
import Home from "../views/Home.vue";
import Graphic from "../views/Graphic.vue";
import Web from "../views/Web.vue";
import Typography from "../views/Typography.vue";
import Internship from "../views/Internship.vue";

Vue.use(VueRouter);
Vue.use(VueHead);
// VueHeadインストール済
// const route = "/";
const route = "/ecc/asimizu/portfolio/";
// const route = "/ecc/msatou/shimi/";

const routes = [
  {
    path: `${route}`,
    name: "Home",
    component: Home,
  },
  {
    path: `${route}:id`,
    name: "Graphic",
    component: Graphic,
    props: (route) => ({
      id: String(route.params.id),
      dataId: Number(route.params.dataId),
      contentsId: Number(route.params.contentsId),
    }),
  },
  {
    path: `${route}:id`,
    name: "Web",
    component: Web,
    props: (route) => ({
      id: String(route.params.id),
      dataId: Number(route.params.dataId),
      contentsId: Number(route.params.contentsId),
    }),
  },
  {
    path: `${route}/typography`,
    name: "Typography",
    component: Typography,
    props: (route) => ({
      id: String(route.params.id),
      dataId: Number(route.params.dataId),
      contentsId: Number(route.params.contentsId),
    }),
  },
  {
    path: `${route}:id`,
    name: "Internship",
    component: Internship,
    props: (route) => ({
      id: String(route.params.id),
      dataId: Number(route.params.dataId),
      contentsId: Number(route.params.contentsId),
    }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
