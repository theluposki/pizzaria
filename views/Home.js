export const Home  = {
  template:
  `
  <h1>Home</h1>
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
