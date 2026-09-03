import { defineStore } from 'pinia'
export const useWeatherStore = defineStore('weather', {
  state: () => ({
    location: { 
        city: 'تهران', 
        country: 'ایران' 
    },
    weather: { 
        temp: 31, 
        status: 'آفتابی', 
        humidity: 45, 
        wind: 12, 
        rain: 5, 
        icon: '☀️' 
    },
    air: { 
        aqi: 42, 
        status: 'سالم', 
        pm25: 18, 
        pm10: 30 
    },
    forecast: [
      { 
        id: 1, 
        day: 'شنبه', 
        maxTemp: 31, 
        minTemp: 21, 
        status: 'آفتابی', 
        rain: 5, 
        icon: '☀️' 
    },
      { 
        id: 2, 
        day: 'یکشنبه', 
        maxTemp: 29, 
        minTemp: 19, 
        status: 'نیمه ابری', 
        rain: 10, 
        icon: '⛅' 
    },
      { 
        id: 3, 
        day: 'دوشنبه', 
        maxTemp: 27, 
        minTemp: 18, 
        status: 'بارانی', 
        rain: 65, 
        icon: '🌧️' 
    },
      { 
        id: 4, 
        day: 'سه‌شنبه', 
        maxTemp: 30, 
        minTemp: 20, 
        status: 'آفتابی', 
        rain: 8, 
        icon: '☀️' 
    },
      { 
        id: 5, 
        day: 'چهارشنبه', 
        maxTemp: 28, 
        minTemp: 19, 
        status: 'ابری', 
        rain: 20, 
        icon: '☁️' 
    },
    ],
    chartData: [
      { 
        day: 'ش', 
        temp: 28 
    },
      { 
        day: 'ی', 
        temp: 30 
    },
      { 
        day: 'د', 
        temp: 31 
    },
      { 
        day: 'س', 
        temp: 27 
    },
      { 
        day: 'چ',
         temp: 29
         },
      { 
        day: 'پ', 
        temp: 33 
    },
      { day: 'ج', temp: 32 },
    ],
    loading: false,
    error: null,
  }),
  getters: {
    currentWeather: (state) => state.weather,
    airQuality: (state) => state.air,
    forecastList: (state) => state.forecast,
    temperatureChart: (state) => state.chartData,
    locationName: (state) => `${state.location.city}، ${state.location.country}`,
  },
  actions: {
    setWeather(data) {
      this.weather = { ...this.weather, ...data }
    },
    setAirQuality(data) {
      this.air = { ...this.air, ...data }
    },
    setForecast(data) {
      this.forecast = data
    },
    setChartData(data) {
      this.chartData = data
    },
    setLocation(data) {
      this.location = { ...this.location, ...data }
    },
    setLoading(value) {
      this.loading = value
    },
    setError(error) {
      this.error = error
    },
  },
})
