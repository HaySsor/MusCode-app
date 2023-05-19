<template>
  <div class="container">
    <div class="img-box">
      <img :src="img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditProductImage',
  props: {
    img: String,
  },
};
</script>
<style lang="scss" scoped>
.container {
  border-top: 1px solid $border-color;
  display: flex;
  justify-content: center;
  padding: 20px;

  .img-box {
    border-radius: 50%;
    width: 200px;
    aspect-ratio: 1;
    overflow: hidden;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
