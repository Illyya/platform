<template>
  <form 
    @submit.prevent="sendingData" 
    action="#" 
    class="sberbank-login-form"
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
      class="sberbank-login-form__label-and-input-for-form"
    />

    <RememberMeInput
      :showRememberMeLabel="showRememberMeLabel"
      :showPasswordHint="showPasswordHint"
      class="sberbank-login-form__remember-me-input"
    />

    <button type="submit" class="sberbank-login-form__btn_form btn btn_form">
      Войти
    </button>
  </form>
</template>

<script>
import { sendingData } from "../api/api.js";
import LabelAndInputForForm from "./LabelAndInputForForm.vue";
import RememberMeInput from "./RememberMeInput.vue";

export default {
  name: "RegistrationFormByMail",
  components: { LabelAndInputForForm, RememberMeInput },
  data() {
    return {
      inputList: [
        {
          nameInput: "sberId",
          idInput: "sberId",
          typeInput: "text",
          placeholderInput: "",
          nameLabel: "Сбербанк ID",
          hintText: "Подсказка",
        },
        {
          nameInput: "password",
          idInput: "password",
          typeInput: "password",
          placeholderInput: "_",
          nameLabel: "Пароль",
          hintText: "Подсказка",
        },
      ],
      showPasswordHint: true,
      showRememberMeLabel: false,
    };
  },
  methods: {
    sendingData() {
      sendingData();
    },
  },
};
</script>

<style lang="scss">
.sberbank-login-form {
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