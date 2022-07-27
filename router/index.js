import { Home } from "../views/Home.js"
import { Menu } from "../views/Menu.js"
import { Cart } from "../views/Cart.js"


export const routes = [
  { path: "/", component: Home },
  { path: "/menu", component: Menu },
  { path: "/cart", component: Cart },
];
