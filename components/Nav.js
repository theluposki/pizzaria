export const Navigation = {
  template:
  `
  <nav class="nav">
      <router-link to="/" class="nav-link" exact-active-class="active-link" exact>
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/menu" class="nav-link" exact-active-class="active-link" exact>
        <i class="fa-solid fa-pizza-slice"></i>
        <span>Cardápio</span>
      </router-link>
      <router-link to="/cart" class="nav-link" exact-active-class="active-link" exact>
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Pedidos</span>
      </router-link>
  </nav>
  `
}
