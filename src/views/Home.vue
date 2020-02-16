<template>
  <div class="home">
    <div class="section" v-feature:cars>
      <h1>This is an home page</h1>
    </div>

    <feature-wrapper name="cars1">
      <div class="section">
        <p>This can only show if the toggle is enabled</p>
      </div>
    </feature-wrapper>

    <div class="section columns u-flex-wrap u-flex-row" v-feature="'cars'">
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
    console.log('created?', this.$hasFeature('cars'))
  },
  computed: {
    carsForSell() {
      return this.$store.getters.carsForSell
    }
  },
  methods: {
    addToFav(car) {
      this.$store.dispatch({type: 'addCarToFavorite', car})
    },
    removeFromFav(car) {
      this.$store.dispatch({type: 'removeCarFromFavorite', car})
    }
  }
}
</script>
