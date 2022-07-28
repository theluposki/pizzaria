import { menu } from "../data/menu.js"
import { currency } from  "../util/currency.js"

export const Menu  = {
  template:
  `
  <div class="menu">
    <h1 class="title-page">Cardápio</h1>

    <div class="panel">

      <div class="panel-group">
        <input v-model="search" type="search" placeholder="Pesquisar sabor"/>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

    </div>

    <ul class="list">
      <li class="list-item" v-for="(item, index) in list" :key="index">

        <div class="item-img">
          <img :src="item.img" alt="imagem do produto." />
        </div>

        <div class="item-details">
          <h2>{{ item.title }}</h2>
          <span>
            <i class="fa-solid fa-clock"></i>
            20 a 35 minutos
          </span>
          <h3>{{ formatCurrency(item.price) }}</h3>

          <div class="increments">
            <button @click="decrement()">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span>{{ valorIncrement }}</span>
            <button @click="increment()">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

      </li>
    </ul>

  </div>
  `,
  data(){
    return {
      search: null,
      list: menu,
      valorIncrement: 0
    }
  },
  mounted(){
    this.setPaths()
  },
  methods: {
    decrement() {
      this.valorIncrement--
    },
    increment(){
      this.valorIncrement++
    },
    formatCurrency(value) {
      return currency(value)
    },
    setPaths() {
      const paths = JSON.parse(localStorage.getItem("paths") || [])

      paths.push(this.$route.path)

      localStorage.setItem("paths", JSON.stringify(paths))

      console.log(paths)
    }
  }
}
