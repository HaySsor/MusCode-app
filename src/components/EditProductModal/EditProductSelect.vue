<template>
  <div class="selector-box">
    <label>{{ labelText }}</label>
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
      <option
        v-for="(option, index) of optionSelect"
        :key="index"
        :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'EditProductSelect',
  props: {
    labelText: String,
    optionSelect: Object,
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.selector-box {
  display: flex;
  flex-direction: column;

  label {
    color: #838383;
    font-size: 14px;
    padding-left: 5px;
  }
  select{
    border: none;
    font-size: 14px;
    color: #384a5c;
    border-bottom: 1px solid $border-color;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 5px;
  }
}
</style>
