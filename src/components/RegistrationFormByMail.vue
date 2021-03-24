<template>
  <form
    @submit.prevent="sendingData"
    action="#"
    class="registration-form-by-mail"
  >
    <LabelAndInputForForm
      v-for="input in inputList"
      :key="input.id"
      :nameInput="input.nameInput"
      :idInput="input.idInput"
      :typeInput="input.typeInput"
      :placeholderInput="input.placeholderInput"
      :nameLabel="input.nameLabel"
      :hintText="input.hintText"
      @sendInputData="sendInputData"
      class="registration-form-by-mail__label-and-input-for-form"
    />    

    <button
      type="submit"
      class="registration-form-by-mail__btn_form btn btn_form"
    >
      Зарегистироваться
    </button>
  </form>
</template>

<script>
import { inputList} from '../const/inputList.js';
import { sendingData } from "../api/api.js";
import LabelAndInputForForm from "./LabelAndInputForForm.vue";

export default {
  name: "RegistrationFormByMail",
  components: { LabelAndInputForForm },
  data() {
    return {
      inputList: [inputList[3], inputList[2], inputList[0], inputList[1]],
      inputData: {},
    };
  },
  methods: {
    sendingData() {
      sendingData(this.inputData);
    },
    sendInputData(inputData) {
      Object.assign(this.inputData, inputData)
    },
  },
};
</script>

<style lang="scss">
.registration-form-by-mail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 17px;

  @media (max-width: 410px) {
    display: flex;
    flex-direction: column;
  }

  &__label-and-input-for-form {
    &:nth-of-type(1),
    &:nth-of-type(4) {
      grid-column: 1 / 3;
    }
  }

  &__btn {
    &_form {
    }
  }
}
</style>