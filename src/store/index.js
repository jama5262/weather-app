import Vue from 'vue'
import Vuex from 'vuex'

import fetchWeatherData from "../data";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: {
      city: "",
      weatherDescription: "",
      weatherIcon: "",
      temperature: 273.15,
      windSpeed: 0,
    },
    queryCity: "nairobi",
    loading: false
  },
  mutations: {
    updateWeatherData: (state, payload) => {
      state.weatherData = { ...payload }
    },
    updateCityQuery: (state, query) => {
      state.queryCity = query
    },
    updateWeatherIcon: (state, icon) => {
      state.weatherIcon = icon
    },
    updateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    temperature: state => {
      return Math.round(state.weatherData.temperature - 273.15)
    }
  },
  actions: {
    fetchWeather: async ({ commit, state }) => {
      try {
        commit("updateLoading", true)
        let data = await fetchWeatherData(state.queryCity)
        commit("updateWeatherData", data)
      } catch (error) {
        commit("updateWeatherData", error)
      } finally {
        commit("updateCityQuery", "")
        commit("updateLoading", false)
      }
    }
  },
})
