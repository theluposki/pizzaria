export const Home  = {
  template:
  `
  <div>
    <h1 class="title-page">Home</h1>
  </div>
  `,
  mounted(){
    console.log(this.$route.path)
    this.setPaths()
  },
  methods: {
    setPaths() {
      const paths = JSON.parse(localStorage.getItem("paths"))

      paths.push(this.$route.path)

      localStorage.setItem("paths", JSON.stringify(paths))

      console.log(paths)
    }
  }
}
