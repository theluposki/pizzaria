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
      <li class="list-item" v-for="(item, index) in $store.state.menu" :key="index">

        <div class="item-img">
          <img :src="item.img" alt="imagem do produto." />
          <button @click="likeFavorite()" class="item-favorite">
            <i v-if="like" class="fa-solid fa-heart"></i>
            <i v-else class="fa-regular fa-heart"></i>
          </button>
        </div>

        <div class="item-details">
          <h2>{{ item.title }}</h2>
          <span>
            <i class="fa-solid fa-clock"></i>
            20 a 35 minutos
          </span>
          <h3>{{ formatCurrency(item.price) }}</h3>

          <div class="increments">
            <button v-if="$store.state.cart[index]" @click="decrement(item)">
              <i class="fa-solid fa-minus"></i>
            </button>

            <span v-if="$store.state.cart[index]">{{ $store.state.cart[index].qtd || 0 }}</span>
            <span v-else>0</span>
            <button @click="increment(item)">
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
      like: false,
      valorIncrement: 0
    }
  },
  mounted(){
    this.setPaths()
  },
  methods: {
    likeFavorite(){
      this.like = !this.like
    },
    decrement(item) {
      this.$store.commit("removeItemCart", item)
    },
    increment(item){
      let obj = {
        id: item.id,
        title: item.title,
        price: item.price,
        likes: item.likes,
        img:item.img,
        ingredients: item.ingredients,
        qtd: 1,
        createAt: item.createAt
      }
      this.$store.commit("addItemCart", obj)
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
