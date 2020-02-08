<template>
  <div class="fav-preview">
    <ImageCmp :name="car.id" width="40px" />
    <span class="fav-preview-name">{{car.vendor}}</span>
  </div>
</template>

<script>
import ImageCmp from './ImageCmp'

export default {
  components: {
    ImageCmp
  },
  props: {
    car: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.fav-preview{
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.fav-preview-name {
  margin-left: 2rem;
  font-size: $font-size-medium;
}
</style>
