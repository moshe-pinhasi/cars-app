import Vue from 'vue'
import Vuex from 'vuex'

import {carService} from '@/services/car.service'

Vue.use(Vuex)

function keyBy (arr, key) {
  return arr.reduce( (acc, item) => {
    acc[item[key]] = item
    return acc
  }, {})
}

export default new Vuex.Store({
  strict: true,
  state: {
    carsForSell: {
      list: [],
      entities: {}
    },
    favorites: []
  },
  mutations: {
    setCars(state, {cars}) {
      state.carsForSell.list = cars.map(car => car.id)
      state.carsForSell.entities = keyBy(cars, 'id')
    },
    setFavorites(state, {favorites}) {
      state.favorites = favorites
    },
    addToFavorite(state, {car}) {
      state.favorites.push(car.id)
    },
    removeFromFavorite(state, {car}) {
      state.favorites = state.favorites.filter(id => id !== car.id)
    }
  },
  actions: {
    async loadCarsForSell({commit}) {
      const cars = await carService.getCars()
      commit({type: 'setCars', cars})
    },
    async addCarToFavorite({commit}, {car}) {
      commit({type: 'addToFavorite', car})
    },
    async removeCarFromFavorite({commit}, {car}) {
      commit({type: 'removeFromFavorite', car})
    }
  },
  getters: {
    carsForSell: state => state.carsForSell
      .list.map( carId => ({
        ...state.carsForSell.entities[carId], 
        liked: state.favorites.includes(carId)
      })),
    userFavoritesCars: state => state.favorites.map(carId => state.carsForSell.entities[carId])
  },
  modules: {
  }
})
