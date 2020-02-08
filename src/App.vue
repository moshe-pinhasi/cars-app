<template>
  <div id="app">
    <div class="header">
      <router-link to="/">this is the header</router-link> |
    </div>

    <main class="app-content">
      <div class="side-nav">
        <SideMenu :clipped="clippedMenu" @toggle-menu="toggleMenu">
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

      <main class="main-content" :class="{'clipped-menu': clippedMenu}">
        <router-view/>
      </main>
    </main>
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
  data() {
    return {
      clippedMenu: false
    }
  },
  computed: {
    userFavoritesCars() {
      return this.$store.getters.userFavoritesCars
    }
  },
  methods: {
    toggleMenu() {
      this.clippedMenu = !this.clippedMenu
    }
  }
}
</script>
<style lang="scss">
@import 'assets/sass/main.scss';
.app-content {
  padding-top: $header-height;
  display: flex;
  flex-direction: row;  
}

.main-content {
  padding-left: 200px;
  transition: .3s padding;

  &.clipped-menu {
    padding-left: 60px;
  }
}

</style>
