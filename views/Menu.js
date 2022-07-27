export const Menu  = {
  template:
  `
  <h1>Cardápio</h1>
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
