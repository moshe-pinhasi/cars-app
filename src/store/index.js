import Vue from 'vue'
import Vuex from 'vuex'

import {carService} from '@/services/car.service'

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
      state.carsForSell = {
        list: [],
        entities: {}
      }

      cars.forEach( car => {
        state.carsForSell.list.push(car.id)
        Vue.set(state.carsForSell.entities, car.id, car)
      })
    },
    setFavorites(state, cars = []) {
      cars
        .filter(car => car.liked)
        .forEach( car => {
          const {id, vendor} = car
          state.favorites.push({id, vendor})
        })
    },
    updateCar(state, car){
      if (!state.carsForSell.entities[car.id]) return

      Vue.set(state.carsForSell.entities, car.id, car)
    },
    addToFavorite(state, car) {
      // if (!state.carsForSell.entities[car.id]) return

      state.favorites.push({id: car.id, vendor: car.vendor})
    },
    removeFromFavorite(state, car) {
      state.favorites = state.favorites.filter(c => c.id !== car.id)
    }
  },
  actions: {
    async loadCarsForSell({commit}) {
      const cars = await carService.getCars()
      commit('setCars', cars)
      commit('setFavorites', cars)
    },
    async addCarToFavorite({commit}, {payload}) {
      const car = payload.car
      car.liked = true
      await carService.updateCar(car)
      commit('addToFavorite', car)
      commit('updateCar', car)
    },
    async removeCarFromFavorite({commit}, {payload}) {
      const car = payload.car
      car.liked = false
      await carService.updateCar(car)
      commit('removeFromFavorite', car)
      commit('updateCar', car)
    }
  },
  getters: {
    carsForSell: state => state.carsForSell.list.map( carId => state.carsForSell.entities[carId]),
    userFavoritesCars: state => state.favorites
  },
  modules: {
  }
})
