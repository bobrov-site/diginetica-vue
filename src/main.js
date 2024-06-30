import Vue from "vue";
import App from "./App.vue";

import "./assets/style.scss";
import getResult from "./arrays";
import whatInConsole from "./object";
import getRegexp from "./regexp";
import isUrl from "./isUrl";

getResult();
whatInConsole();
getRegexp();
isUrl();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
