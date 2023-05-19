<template>
  <form class="form" @submit.prevent="handleSubmit">
    <EditProductInput
      v-for="edit in editInputs"
      :key="edit.id"
      :labelText="edit.text"
      v-model="edit.model"
      :inputType="edit.inputType"
      :id="edit.id"
      :priceError="priceError" />

    <EditProductSelect
      v-for="option in optionSelects"
      :labelText="option.text"
      v-model="option.model"
      :optionSelect="option.option" />

    <div class="button-box">
      <button class="save">Zapisz</button>
      <button @click="closeModal">Anuluj</button>
    </div>
  </form>
</template>
<script>
import {ref} from 'vue';

import EditProductInput from './EditProductInput.vue';
import EditProductSelect from './EditProductSelect.vue';

import {checkPrice} from '../../helper/checkPrice';
import {createNewProductValue} from '../../helper/createNewProductValue';

export default {
  name: 'EditProductForm',
  components: {EditProductInput, EditProductSelect},
  props: {
    openProduct: Object,
    closeModal: Function,
    handleProductChange: Function,
  },
  setup(props) {
    const {name, price, promotionalPrice, currency, id} = props.openProduct;
    const priceError = ref(false);

    const editInputs = [
      {
        text: 'Nazwa produktu',
        model: name,
        id: 1,
        name: 'name',
        inputType: 'text',
      },
      {text: 'Cena', model: price, id: 2, name: 'price', inputType: 'number'},
      {
        text: 'Promocyjna cena',
        model: promotionalPrice,
        id: 3,
        name: 'promotionalPrice',
        inputType: 'number',
      },
    ];
    //  held in an array because, prepared for the possible addition of other selectors in the form of
    const optionSelects = [
      {
        text: 'Waluta',
        model: currency,
        option: ['$', 'PLN', 'EUR'],
        name: 'currency',
      },
    ];

    const handleSubmit = () => {
      const allValue = [...editInputs, ...optionSelects];

      priceError.value = checkPrice(allValue);

      if (priceError.value) {
        return;
      }
      const newProductValue = createNewProductValue(allValue);

      props.handleProductChange(newProductValue, id);
      props.closeModal();
    };

    return {handleSubmit, optionSelects, editInputs, priceError};
  },
};
</script>
<style lang="scss" scoped>
.form {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .button-box {
    position: absolute;
    bottom: 0;
    border-top: 2px solid $border-color;
    width: 100%;
    left: 0;
    padding: 10px;
    display: flex;
    gap: 5px;

    button {
      padding: 7px 14px;
      font-size: 14px;
      background-color: transparent;
      border: 1px solid $border-color;
    }
    .save {
      background-color: $accent-color;
      color: white;
    }
  }
}
</style>
