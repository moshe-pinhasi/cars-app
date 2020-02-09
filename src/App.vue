<template>
  <div>
    <div class="header">
      <RouterLink to="/">this is the header</RouterLink> |
    </div>

    <main class="app-content">
      <div class="side-nav">
        <SideMenu :clipped="clippedMenu" @toggle-menu="toggleMenu">
          <div class="side-menu-section">
            <MenuList>
              <MenuListItem v-for="action in pages" :key="action.name" >
                <MenuListAction :action="action" />
              </MenuListItem>
            </MenuList>
          </div>
          <div class="side-menu-section">
            <h1>Favorites</h1>
            <FavPreview v-for="car in userFavoritesCars" :key="car.id" :car="car" />
          </div>
        </SideMenu>
      </div>

      <main class="main-content" :class="{'clipped-menu': clippedMenu}">
        <RouterView/>
      </main>
    </main>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import FavPreview from '@/components/FavPreview'
import MenuList from '@/components/MenuList'
import MenuListAction from '@/components/MenuListAction'
import MenuListItem from '@/components/MenuListItem'

export default {
  components: {
    SideMenu,
    FavPreview,
    MenuList,
    MenuListAction,
    MenuListItem
  },
  data() {
    return {
      clippedMenu: false,
      pages: [
        {route: 'home', name: 'Home', icon: "024-checking"},
        {route: 'favorites', name: "Favorites", icon: "007-stars"}
      ]
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
