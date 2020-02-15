import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: "London",
    weatherDescription: "clouds",
    weatherIcon: "cloud-showers-heavy",
    temperature: 18,
    windSpeed: 56,
    queryCity: ""
  },
  mutations: {
    updateCityQuery: (state, query) => {
      state.queryCity = query
    }
  },
  getters: {
    temperature: state => {
      return state.temperature
    }
  },
  actions: {
    fetchWeather: () => {
      
    }
  },
})
