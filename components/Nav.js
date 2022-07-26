export const Navigation = {
  template:
  `
  <nav class="nav">
      <router-link to="/" class="nav-link" exact-active-class="active-link" exact>
        <i class="ai-home"></i>
        <span>Home</span>
      </router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/about" class="nav-link" exact-active-class="active-link" exact>
        <i class="ai-info"></i>
        <span>About</span>
      </router-link>
  </nav>
  `
}
