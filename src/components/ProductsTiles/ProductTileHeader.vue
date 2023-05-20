<template>
  <header class="title-box">
    <h3 class="title">{{ name }}</h3>
  </header>
</template>
<script>
export default {
  name: 'ProductTileHeader',
  props: {
    name: String,
  },
};
</script>
<style lang="scss" scoped>
.title-box {
  padding: 22px 20px;
  padding-bottom: 15px;

  .title {
    font-weight: normal;
  }
}
</style>
