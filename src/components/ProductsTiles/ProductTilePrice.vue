<template>
  <div class="price-box">
    <p class="promotional-price">{{ promotionCheek }} {{ currency }}</p>
    <p v-if="promotionalPrice !== 0" class="price">
      {{ price }} {{ currency }}
    </p>
  </div>
</template>
<script>
import {computed} from 'vue';
export default {
  name: 'ProductTilePrice',
  props: {
    price: Number,
    promotionalPrice: Number,
    currency: String,
  },
  setup(props) {
    console.log(props.price, props.promotionalPrice);

    const promotionCheek = computed(() => {
      return props.promotionalPrice === 0
        ? props.price
        : props.promotionalPrice;
    });

    return {promotionCheek};
  },
};
</script>
<style lang="scss" scoped>
.price-box {
  margin-top: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  .promotional-price {
    color: #862583;
    font-size: 18px;
  }
  .price {
    font-size: 14px;
    text-decoration: line-through;
  }
}
</style>
