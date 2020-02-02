import Vue from 'vue'
import Vuex from 'vuex'

import {car} from '@/services/car.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carsForSell: [],
    favorites: {}
  },
  mutations: {
    setCars(state, cars = []) {
      state.carsForSell = cars
    },
    addToFavorite(state, car) {
      if (state.favorites[car.id]) return

      state.favorites[car.id] = car.id
      console.log("added!");
    },
    removeFromFavorite(state, car) {
      if (!state.favorites[car.id]) return

      state.favorites[car.id] = null
      console.log("removed!");
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
    carsForSell: state => state.carsForSell,
    userFavoriteCarsObject: state => state.favorites,
    userFavoriteCarsArray: state => 
      state.carsForSell
        .filter(id => state.favorites[id])
  },
  modules: {
  }
})
