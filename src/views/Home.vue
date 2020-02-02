<template>
  <div class="home">
    <div class="section">
      <h1>This is an home page</h1>
    </div>

    <div class="section columns u-flex-wrap u-flex-row">
      <div class="column col-1-of-4" v-for="car in carsForSell" :key="car.id">
        <CarPreviewCard :car="car" @removeFromFav="removeFromFav" @addToFav="addToFav" />
      </div>
    </div>
  </div>
</template>

<script>
import CarPreviewCard from '@/components/CarPreviewCard'

export default {
  components: {
    CarPreviewCard
  },
  async created() {
    this.$store.dispatch({type: 'loadCarsForSell'})
  },
  computed: {
    carsForSell() {
      return this.$store.getters.carsForSell
        .map(car => 
          this.userFavorites[car.id] ? 
            Object.keys({}, car, {saved: true}) : car
        )
    },
    userFavorites() {
      return this.$store.getters.userFavoriteCarsObject
    }
  },
  methods: {
    addToFav(car) {
      this.$store.dispatch({type: 'addCarToFavorite', payload: {car}})
    },
    removeFromFav(car) {
      this.$store.dispatch({type: 'removeCarFromFavorite', payload: {car}})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
