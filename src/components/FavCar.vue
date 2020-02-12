<template>
  <div class="fav-car">
    <Card layout="row">
      <template v-slot:card-image>
        <ImageCmp :name="car.id" width="80px" height="80px" />
      </template>
      <template v-slot:card-content>
        <div class="fav-car-details">
          <h1>{{car.vendor}}</h1>
          <p class="fav-car-speed">Speed: {{car.speed}}</p>
          <p class="fav-car-desc">Desc: {{car.desc}}</p>
        </div>
      </template>

      <template v-slot:card-footer>
        <div class="footer-container u-flex u-flex-justify-between u-flex-align-items-center">
          <div class="actions">
            <Icon name="027-call" width="30px" class="action" />
            <Icon name="032-email" width="30px" class="action" />
          </div>
          <button class="btn btn-primary btn--outline">Buy</button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import ImageCmp from './ImageCmp'
import Icon from './Icon'
import Card from './Card'

export default {
  components: {
    ImageCmp,
    Icon,
    Card
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
.fav-car {
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

p:not(:last-child) {
  margin-bottom: 1rem;
}

.footer-container {
    margin-top: 1.5rem;
}

.actions {
  .action {
    cursor: pointer;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
