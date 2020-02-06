<template>
  <div id="app">
    <div class="header">
      <router-link to="/">this is the header</router-link> |
    </div>

    <div class="body">
      <div class="side-nav">
        <SideMenu>
          <div class="side-menu-section">
            <h1 class="side-menu-section-title">Favorites</h1>
            <FavPreview v-for="car in userFavoritesCars" :key="car.id" :car="car" />
          </div>
          <div class="side-menu-section">
            <h1>Favorites 2</h1>
            <FavPreview v-for="car in userFavoritesCars" :key="car.id" :car="car" />
          </div>
        </SideMenu>
      </div>
      <main class="main-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import FavPreview from '@/components/FavPreview'

export default {
  components: {
    SideMenu,
    FavPreview
  },
  computed: {
    userFavoritesCars() {
      return this.$store.getters.userFavoritesCars
    }
  }
}
</script>
<style lang="scss">
@import 'assets/sass/main.scss';

.body {
  padding-top: 10vh;
}

.main-content {
    max-width: $app-max-width;
    margin: 0 auto;
    overflow: auto;
    padding: 0 0 0 200px;
}

</style>
