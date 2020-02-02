import Vue from "vue";
import App from "./App";

import store from "./store";
import router from "./router";

new Vue({
  render: h => h(App),
  el: "#app",
  store,
  router
});
