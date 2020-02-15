import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: "Nairobi",
    weatherDescription: "broken clouds",
    weatherIcon: "cloud-showers-heavy",
    temperature: 12,
    windSpeed: 50,
    queryCity: ""
  },
  mutations: {

  },
  getters: {
    getTemperature: state => {
      return state.temperature
    }
  },
  actions: {
    fetchWeather: () => {
      
    }
  },
})
