import Vue from 'vue'
import Vuex from 'vuex'

import {car} from '@/services/car.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carsForSell: {
      list: [],
      entities: {}
    },
    favorites: []
  },
  mutations: {
    setCars(state, cars = []) {
      cars.forEach( car => {
        state.carsForSell.list.push(car.id)
        Vue.set(state.carsForSell.entities, car.id, car)
      })
    },
    addToFavorite(state, car) {
      if (!state.carsForSell.entities[car.id]) return

      Vue.set(state.carsForSell.entities[car.id], 'liked', true)
      state.favorites.push({id: car.id, vendor: car.vendor})
    },
    removeFromFavorite(state, car) {
      if (!state.carsForSell.entities[car.id]) return
      
      state.favorites = state.favorites.filter(c => c.id !== car.id)
      Vue.set(state.carsForSell.entities[car.id], 'liked', false)
    }
  },
  actions: {
    async loadCarsForSell({commit}) {
      const cars = await car.getCars()
      commit('setCars', cars)
    },
    addCarToFavorite({commit}, {payload}) {
      commit('addToFavorite', payload.car)
    },
    removeCarFromFavorite({commit}, {payload}) {
      commit('removeFromFavorite', payload.car)
    }
  },
  getters: {
    carsForSell: state => state.carsForSell.list.map( carId => state.carsForSell.entities[carId]),
    userFavoritesCars: state => state.favorites
  },
  modules: {
  }
})
