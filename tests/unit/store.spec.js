import store, { fetchWeather } from "@/store"

import fetchWeatherData from "../../src/data"

jest.mock("../../src/data")

const defaultState = store.state

const resetState = () => {
  store.replaceState(defaultState)
}

describe('Mutations', () => {
  beforeEach(resetState)

  it('Updated weather data', () => {
    const weatherData = {
      city: "London",
      weatherDescription: "clear sky",
      weatherIcon: "sun",
      temperature: 300,
      windSpeed: 24,
    }
    store.commit("updateWeatherData", weatherData)
    expect(store.state.weatherData).toMatchObject(weatherData)
  })

  it('Updated City Query to New York', () => {
    store.commit("updateCityQuery", "new york")
    expect(store.state.queryCity).toBe("new york")
  })

  it('Updated weather icon to cloud', () => {
    store.commit("updateWeatherIcon", "cloud")
    expect(store.state.weatherData.weatherIcon).toBe("cloud")
  })

  it('Updated loading state to true', () => {
    store.commit("updateLoading", true)
    expect(store.state.loading).toBe(true)
  })

})

describe('Getters', () => {
  beforeEach(resetState)

  it('Get temperature of 19 degrees when kelvin is 292.26', () => {
    store.state.weatherData.temperature = 292.26
    let result = store.getters.temperature
    expect(result).toBe(19)
  })

})

describe('Actions', () => {
  beforeEach(resetState)

  it('Successfully get weather data', async () => {

    const mockData = {
      city: "Nairobi",
      temperature: 287.59,
      weatherDescription: "clear sky",
      weatherIcon: "sun",
      windSpeed: 2.31
    }

    fetchWeatherData.mockResolvedValue(mockData)

    const commit = jest.fn()
    const state = store.state

    await fetchWeather({ commit, state })
    expect(commit).toHaveBeenCalledWith(
      "updateWeatherData", mockData)
  })

  it('Fail getting weather data', async () => {

    const mockData = {
      city: "Oops ☹️, looks like I couldn't find that",
      weatherDescription: "",
      weatherIcon: "exclamation-triangle",
      temperature: 273.15,
      windSpeed: 0,
    }

    fetchWeatherData.mockRejectedValue(mockData)

    const commit = jest.fn()
    const state = store.state

    await fetchWeather({ commit, state })
    expect(commit).toHaveBeenCalledWith(
      "updateWeatherData", mockData)
  })

})

