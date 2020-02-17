import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import AppHeader from "@/components/AppHeader"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppHeader', () => {

  it("render city name", () => {

    store.state.weatherData.city = "London"
    const wrapper = shallowMount(AppHeader, { store, localVue })
    expect(wrapper.find("p").text()).toBe("London")
  })

  it("render weather description", () => {
    store.state.weatherData.weatherDescription = "heavy rains"
    const wrapper = shallowMount(AppHeader, { store, localVue })
    expect(wrapper.findAll("p").at(1).text()).toBe("heavy rains")
  })

})
