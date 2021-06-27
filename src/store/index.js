import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  // Vue.config.devtools = true;
  state: {
    // 使用者目前所選縣市，預設為台北
    currCity: '臺北市',
    // 使用者目前所選行政區，預設為北投區
    currDistrict: '北投區',
    // 存放API回傳的縣市/行政區的列表資訊
    locations: [],
    // 存放API回傳的書店資訊
    stores: []
  },
  mutations: {
    setCurrCity (state, payload) {
      state.currCity = payload
    },
    setcurrDistrict (state, payload) {
      state.currDistrict = payload
    },
    setLocation (state, payload) {
      state.locations = payload
      console.log(state.locations)
    },
    setStores (state, payload) {
      state.stores = payload
    }
  },
  actions: {
    fetchLocations ({ commit }) {
      axios
        .get(
          'https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'
        )
        .then((res) => {
          commit('setLocation', res.data)
        })
    },
    fetchStores ({ commit }) {
      axios.get('/api').then((res) => {
        commit('setStores', res.data)
      })
    }
  },
  getters: {
    cityList (state) {
      return state.locations.map(item => item.name)
    },
    districtList (state) {
      return state.locations.find(d => d.name === state.currCity)?.districts || []
    },
    filterStores (state) {
      return state.stores.filter(item => item.cityName.includes(state.currCity))
    }
  },
  modules: {}
})
