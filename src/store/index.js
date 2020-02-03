import Vue from 'vue'
import Vuex from 'vuex'

import {car} from '@/services/car.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carsForSell: [],
    favorites: []
  },
  mutations: {
    setCars(state, cars = []) {
      state.carsForSell = cars
    },
    addToFavorite(state, car) {
      const idx = state.carsForSell.findIndex(c => c.id === car.id)
      if (idx === -1) return
      
      Vue.set(state.carsForSell[idx], 'liked', true)
      state.favorites.push(state.carsForSell[idx])
      console.log("added!");
    },
    removeFromFavorite(state, car) {
      const idx = state.carsForSell.findIndex(c => c.id === car.id)
      if (idx === -1) return
      
      Vue.set(state.carsForSell[idx], 'liked', false)
      state.favorites = state.favorites.filter(c => c.id !== car.id)
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
    userFavoriteCars: state => state.favorites 
  },
  modules: {
  }
})
