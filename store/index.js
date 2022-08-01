export const store = Vuex.createStore({
    state () {
      return {
        user: {},
        menu: [],
        cart: [],
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setUser(state, payload) {
        state.user = payload
      },
      seedMenu(state, payload) {
        state.menu = payload
      },
      setMenu(state, payload) {
        state.menu.push(payload)
      },
      addItemCart(state, payload){
        let productInCart = state.cart.find(item => item.id === payload.id)

        let Index = state.cart.findIndex(item => item.id === payload.id)

        if(productInCart) {
          productInCart.qtd++
          payload.qtd = productInCart.qtd
          return state.cart.splice(Index, 1, payload)
        } else {
          return state.cart.push(payload)
        }
      },
      removeItemCart(state, payload){
        let productInCart = state.cart.find(item => item.id === payload.id)

        let Index = state.cart.findIndex(item => item.id === payload.id)

        if(productInCart) {
          productInCart.qtd--
          payload.qtd = productInCart.qtd
          if(productInCart.qtd === 0) {
            console.log("remover")
            return state.cart.splice(Index, 1)
          } else {
            state.cart.splice(Index, 1, payload)
          }

        }
      },
    }
})
