<template>
  <div class="car-preview-card">
    <Card>
      <template v-slot:card-image>
        <div class="car-img">
          <img :src="require(`../assets/imgs/cars/${car.id}.png`)" />
        </div>
      </template>
      <template v-slot:card-content>
        <div class="car-details">
          <h1 class="u-center-text u-margin-bottom-small">{{car.vendor}}</h1>
          <div class="car-speed">Speed: {{car.speed}}</div>
          <div class="car-desc">Desc: {{car.desc}}</div>
        </div>
      </template>
      <template v-slot:card-footer>
        <div class="car-actions u-padding-small">
          <!-- <div class="action-item" @click="toggleSaved('addToFav')">
            <Icon name="010-add" width="40px" />
          </div>
          <div class="action-item" @click="toggleSaved('removeFromFav')">
            <Icon name="001-favourite" width="40px"/>
          </div> -->
          <div class="action-item" v-if="!car.saved" @click="toggleSaved('addToFav')">
            <Icon name="010-add" width="40px" />
          </div>
          <div class="action-item" v-else @click="toggleSaved('removeFromFav')">
            <Icon name="001-favourite" width="40px"/>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from './Card'
import Icon from './Icon'

export default {
  components: {
    Card,
    Icon
  },
  props: {
    car: {
      require: true,
      type: Object
    }
  },
  methods: {
    toggleSaved(event) {
      this.$emit(event, this.car)
    }
  }
}
</script>

<style lang="scss" scoped>
.car-speed {
  line-height: 1.4;
}

.car-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.car-img {
  width: 10rem;
  height: 10rem;
  margin: $size-small auto;

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
