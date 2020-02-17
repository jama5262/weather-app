import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import AppInput from "@/components/AppInput"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["b-row", "b-col", "b-form-input", "b-button"]

describe('AppInput', () => {
  it('check if has button', () => {
    const wrapper = shallowMount(AppInput, { store, localVue, stubs })
    expect(wrapper.contains({ref: 'b-button'})).toBe(true)
  })

  it('render "quertCity" from input', () => {

    store.state.queryCity = "new zealand"
    const wrapper = shallowMount(AppInput, { store, localVue, stubs })
    expect(wrapper.find({ref: 'b-form-input'}).attributes().value).toBe("new zealand")
  })

})