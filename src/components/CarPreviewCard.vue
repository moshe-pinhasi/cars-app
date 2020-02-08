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
        <div class="car-actions u-padding-small u-center-text">
          <div class="action-item" v-if="!car.liked" @click="toggleSaved('addToFav')">
            <Icon name="010-add" width="40px" />
          </div>
          <div class="action-item" v-else @click="toggleSaved('removeFromFav')">
            <Icon name="001-favourite" width="40px"/>
          </div>
          <Icon class="animtion-value" 
                :class="{animate: showAnimation}"
                name="005-add" 
                width="20px" />
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
      required: true,
      type: Object
    }
  },
  data () {
    return {
      showAnimation: false
    }
  },
  methods: {
    toggleSaved(event) {

      if (!this.car.liked) {
        this.showAnimation = true

        setTimeout(() => {
          this.showAnimation = false
        }, 1000)
      }

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

.action-item {
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 1;
}

.animtion-value {
  opacity: 0;
  position: absolute;
  left: 50%;
  bottom: 18px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.animate {
  animation: sendCoinAnimation 1s;
  z-index: 2;
}

@keyframes addToFavoritesAnimation {
  0%   { opacity: 0; font-size: 1em;}
  1%   { opacity: 1; }
  50% { transform: translate(15px,-50px);font-size: 1.3em ;}
  60% { opacity: 0.7; }
  100% { opacity: 0; transform: translate(35px,110px) ;color: #039b21;}
}

</style>