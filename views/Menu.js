export const Menu  = {
  template:
  `
  <div class="menu">
    <h1 class="title-page">Cardápio</h1>
    <div class="panel">
      <div class="panel-group">
        <input type="search" placeholder="Pesquisar sabor"/>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
  `,
  mounted(){
    this.setPaths()
  },
  methods: {
    setPaths() {
      const paths = JSON.parse(localStorage.getItem("paths") || [])

      paths.push(this.$route.path)

      localStorage.setItem("paths", JSON.stringify(paths))

      console.log(paths)
    }
  }
}
