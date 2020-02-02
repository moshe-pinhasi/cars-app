<template>
  <div id="app">
    <div class="header">
      <router-link to="/">this is the header</router-link> |
    </div>

    <div class="main-content">
      <div class="section">
        <div class="columns">
          <div class="column col-1-of-10">
            <SideMenu />
          </div>
          <div class="column"><router-view/></div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  components: {
    SideMenu
  }
}
</script>
<style lang="scss">
@import 'assets/sass/main.scss';

.main-content {
    max-width: $app-max-width;
    margin: 0 auto;
}

</style>
