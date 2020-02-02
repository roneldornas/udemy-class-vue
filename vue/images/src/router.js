import Vue from "vue";
import VueRouter from "vue-router";

import AuthHandler from "./components/AuthHandler";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [{ path: "/oauth2/callback", component: AuthHandler }]
});
