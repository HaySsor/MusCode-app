<template>
  <div class="title-box">
    <h3>Edycja produktu: {{ name }}</h3>
  </div>
  <div class="line"></div>
</template>
<script>
export default {
  name: 'EditProductModalHeader',
  props: {
    name: String,
  },
};
</script>
<style lang="scss" scoped>
.title-box {
  padding: 20px 10px;
  border-bottom: 1px solid $border-color;
  h3 {
    font-size: 18px;
    font-weight: normal;
  }
}
.line {
  width: 100%;
  height: 3px;
  background-color: #4530bd;
}
</style>
