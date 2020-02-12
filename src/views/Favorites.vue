<template>
  <div class="favorites">
    <div class="section">
      <h1>Favorites</h1>

      <FavCar v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import FavCar from '@/components/FavCar'

export default {
  components: {
    FavCar
  },
  computed: {
    cars() {
      return this.$store.getters.userFavoritesCars
    }
  },
}
</script>

<style lang="scss" scoped>
.favorites {
}
</style>
