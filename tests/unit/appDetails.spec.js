import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import AppDetails from "@/components/AppDetails"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["b-row", "b-col", "font-awesome-icon"]

describe('AppDetails', () => {

  it("render wind speed", () => {

    store.state.weatherData.windSpeed = 24
    const wrapper = shallowMount(AppDetails, {
      store, localVue, stubs })
    expect(wrapper.findAll("p").at(1).text()).toBe("24 m/s")
  })

  it("render weather temperature from getter", () => {
    store.state.weatherData.temperature = 299.65
    const wrapper = shallowMount(AppDetails, {
      store, localVue, stubs })
    expect(wrapper.find("p").text()).toBe("27 °")
  })

})