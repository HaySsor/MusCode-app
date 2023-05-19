<template>
  <div class="badge">
    <span class="text">-{{ calculatePromo }}%</span>
  </div>
</template>
<script>
import {computed} from 'vue';

export default {
  name: 'ProductPromoBadge',
  props: {
    price: Number,
    promotionalPrice: Number,
  },
  setup(props) {
    const calculatePromo = computed(() =>
      Math.floor(((props.price - props.promotionalPrice) / props.price) * 100)
    );
    return {calculatePromo};
  },
};
</script>
<style lang="scss" scoped>
.badge {
  width: 140px;
  height: 20px;
  background-color: black;
  position: absolute;
  top: 25px;
  right: -35px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  .text {
    color: white;
    text-align: center;
  }
}
</style>
