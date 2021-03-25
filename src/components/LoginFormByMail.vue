<template>
  <form 
    @submit.prevent="sendingData" 
    action="#" 
    class="login-form-by-mail"
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
      class="login-form-by-mail__label-and-input-for-form"
    />

    <RememberMeInput
      :showRememberMeLabel="showRememberMeLabel"
      :showPasswordHint="showPasswordHint"
      @showCheckByCode="showCheckByCode"
      class="login-form-by-mail__remember-me-input"
    />

    <button type="submit" class="login-form-by-mail__btn_form btn btn_form">
      Войти
    </button>
  </form>
</template>

<script>
import { inputList} from '../const/inputList.js';
import { sendingData } from '../api/api.js';
import LabelAndInputForForm from "./LabelAndInputForForm.vue";
import RememberMeInput from "./RememberMeInput.vue";

export default {
  name: "RegistrationFormByMail",
  components: { LabelAndInputForForm, RememberMeInput },
  data() {
    return {
      // inputList: [inputList[0], inputList[1]],
      showPasswordHint: true,
      showRememberMeLabel: true,
      inputData: {},
    };
  },
  methods: {
    showCheckByCode() {
      this.$emit("showCheckByCode");
    },
    sendingData() {
      sendingData(this.inputData)
    },
    sendInputData(inputData) {
      Object.assign(this.inputData, inputData)
    },
  },
  created() {
    this.inputList = [inputList[0], inputList[1]];
  }
};
</script>

<style lang="scss">
.login-form-by-mail {
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;

  &__label-and-input-for-form {
    margin-bottom: 20px;
  }

  &__remember-me-input {
    margin-bottom: 29px;
  }

  &__btn {
    &_form {
    }
  }
}
</style>