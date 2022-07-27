export const Headers = {
  template:
  `
  <div class="headers">
    <div class="headers-nav">
      <button v-if=" $route.path === '/' ">
        <i class="fa-solid fa-house"></i>
      </button>
      <button v-else @click="getPaths()">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
    </div>

    <div class="logo">
      <i class="ai-octocat-fill"></i>
      <div class="logo-name">
        <h3>MyReb</h3>
        <span>pizzaria</span>
      </div>
    </div>

    <div class="profile-photo">
      <img src="https://i.pravatar.cc/150?img=65" alt="imagem perfil"/>
    </div>

  </div>
  `,
  mounted(){

  },
  methods: {
    getPaths() {
      const paths = JSON.parse(localStorage.getItem("paths") || [])

      let backPath = paths[paths.length -2]

      this.$router.push({ path: backPath })
      console.log(backPath)
    }
  }
}
