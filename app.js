import { store } from "./store/index.js"
import { routes } from "./router/index.js"

import { Headers } from "./components/Headers.js"
import { Navigation } from "./components/Nav.js"

import { user } from "./data/user.js"
import { menu } from "./data/menu.js"

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
  created(){
    this.$store.commit("setUser", user)
    this.$store.commit("seedMenu", menu)

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
