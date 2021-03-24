<template>
  <form 
    @submit.prevent="showCheckByCode" 
    action="#" 
    class="phone-login-form"
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
      class="phone-login-form__label-and-input-for-form"
    />

    <RememberMeInput
      :showRememberMeLabel="showRememberMeLabel"
      :showPasswordHint="showPasswordHint"
      class="phone-login-form__remember-me-input"
    />

    <button 
      type="submit" 
      class="phone-login-form__btn_form btn btn_form"
    >
      Войти
    </button>
  </form>
</template>

<script>
import { inputList} from '../const/inputList.js';
import LabelAndInputForForm from "./LabelAndInputForForm.vue";
import RememberMeInput from "./RememberMeInput.vue";

export default {
  name: "PhoneLoginForm",
  components: { LabelAndInputForForm, RememberMeInput },
  data() {
    return {
      inputList: [inputList[2]],
      showPasswordHint: false,
      showRememberMeLabel: true,
    };
  },
  methods: {
    showCheckByCode() {
      this.$emit('showCheckByCode')
    }
  }
};
</script>

<style lang="scss">
.phone-login-form {
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