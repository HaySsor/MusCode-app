<template>
  <div class="input-box">
    <label>{{ labelText }}</label>
    <span v-if="id === 3 && priceError" class="error-span"
      >cena promocyjna musi być niższa niż standardowa</span
    >
    <input
      :value="modelValue === 0 ? '' : modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="id !== 3"
      :type="inputType"
      :class="id === 3 ? errorClass : ''" />
  </div>
</template>
<script>
import {computed} from 'vue';
export default {
  name: 'EditProductInput',
  props: {
    labelText: String,
    modelValue: {
      type: [String, Number],
      required: true,
    },
    inputType: String,
    id: Number,
    priceError: Boolean,
  },
  setup(props) {
    const errorClass = computed(() => {
      console.log(props.priceError);
      return props.priceError ? 'error' : '';
    });
    return {errorClass};
  },
};
</script>
<style lang="scss" scoped>
.input-box {
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: #838383;
    font-size: 14px;
    padding-left: 5px;
  }
  input {
    border: none;
    font-size: 14px;
    color: #384a5c;
    border-bottom: 1px solid $border-color;
    padding: 10px 0 5px 5px;
  }
  .error {
    border-color: tomato;
    color: tomato;
  }
  .error-span {
    position: absolute;
    right: 0;
    color: tomato;
  }
}
</style>
