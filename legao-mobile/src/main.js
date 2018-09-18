import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App";

// import Vant from "vant";
// import "vant/lib/vant-css/index.css";

// Vue.use(Vant);

import { Button } from "vant";
Vue.use(Button);

import "@/styles/common.scss";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
