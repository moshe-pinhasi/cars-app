<template>
  <div class="card" :class="classes" >
    <div class="card-image">
      <slot name="card-image"></slot>
    </div>
    <div class="card-content">
        <slot name="card-content"></slot>
    </div>

    <footer class="card-footer" v-if="hasFooterSlot">
        <slot name="card-footer"></slot>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    rounded: Boolean,
    animate: Boolean,
    layout: {
      type: String,
      default: 'col'
    }
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots['card-footer']
    },
    isRounded() {
      return this.rounded || this.$attrs.hasOwnProperty('rounded')
    },
    isAnimate() {
      return this.animate || this.$attrs.hasOwnProperty('animate')
    },
    classes(){
      return {
        'card--rounded': this.isRounded,
        'card-layout-col': this.layout === 'col',
        'card-layout-row': this.layout === 'row',
        'card--animate': this.isAnimate
      }
    }
  }
}
</script>