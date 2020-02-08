<template>
    <router-link class="menu-list-action" :to="{name: action.route}" >
        <Icon v-if="action.icon" 
              :name="action.icon" 
              width="35px" 
              class="menu-list-action-icon"/>
        <div class="menu-list-action-title">{{action.name}}</div>
    </router-link>
</template>

<script>
import Icon from './Icon'
import MenuListItem from './MenuListItem'

export default {
  components: {
    Icon,
    MenuListItem
  },
  props: {
      action: {
          type: Object,
          required: true
      }
  }
}
</script>

<style lang="scss" scoped>
.menu-list-action {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.menu-list-action-title {
    margin-left: 2rem;
    font-size: $font-size-medium;
}
</style>