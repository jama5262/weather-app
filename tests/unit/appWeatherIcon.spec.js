import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import AppWeatherIcon from "@/components/AppWeatherIcon"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["font-awesome-icon"]

describe('AppWeatherIcon', () => {
  it('check if has icon element', () => {
    const wrapper = shallowMount(AppWeatherIcon, { store, localVue, stubs })
    expect(wrapper.contains({ref: 'font-awesome-icon'})).toBe(true)
  })

  it('render "weatherIcon" from font-awesome-icom element', () => {

    store.state.weatherData.weatherIcon = "cloud"
    const wrapper = shallowMount(AppWeatherIcon, { store, localVue, stubs })
    expect(wrapper.find({ref: 'font-awesome-icon'}).attributes().icon).toBe("cloud")
  })

})