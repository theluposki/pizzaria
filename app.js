import { store } from "./store/index.js"
import { routes } from "./router/index.js"

import { Headers } from "./components/Headers.js"
import { Navigation } from "./components/Nav.js"

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

localStorage.setItem("paths", JSON.stringify([]))

const app = Vue.createApp({
  components: {
    Headers,
    Navigation
  },
  data(){
    return {
      title: "MyApp Vue =D"
    }
  }
});

app.use(store);

app.use(router);

app.mount("#app");
