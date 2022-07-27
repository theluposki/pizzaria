export const Cart = {
  template:
  `
  <div>
    <h1 class="title-page">Seus Pedidos</h1>
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
