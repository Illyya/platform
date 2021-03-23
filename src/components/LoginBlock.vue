<template>
  <div class="login-block">
    <component @showCheckByCode="showCheckByCode" :is="activeLoginForm" />

    <OtherWaysToRegisterOrLogin
      :nameOfOtherMethods="nameOfOtherMethods"
      :hideBtn="hideBtn"
      @showActiveLoginForm="showActiveLoginForm"
      class="login-block__other-ways-to-register-or-login"
    />
  </div>
</template>

<script>
import OtherWaysToRegisterOrLogin from "./OtherWaysToRegisterOrLogin.vue";
import LoginFormByMail from "./LoginFormByMail.vue";
import SberbankLoginForm from "./SberbankLoginForm.vue";
import PhoneLoginForm from "./PhoneLoginForm.vue";
import CheckByCode from "./CheckByCode.vue";

export default {
  components: {
    LoginFormByMail,
    OtherWaysToRegisterOrLogin,
    SberbankLoginForm,
    PhoneLoginForm,
    CheckByCode,
  },
  name: "LoginBlock",
  data() {
    return {
      activeLoginForm: "LoginFormByMail",
      nameOfOtherMethods: "Другие способы входа",
      hideBtn: "Войти по e-mail",
    };
  },
  methods: {
    showActiveLoginForm(buttonText) {
      switch (buttonText) {
        case "Войти по Сбербанк ID":
          this.activeLoginForm = SberbankLoginForm;
          break;

        case "по номеру телефона":
          this.activeLoginForm = PhoneLoginForm;
          break;

        case "Войти по e-mail":
          this.activeLoginForm = LoginFormByMail;
          break;

        default:
          break;
      }

      this.hideButton(buttonText);
    },
    hideButton(buttonText) {
      if (
        buttonText == "Войти по Сбербанк ID" ||
        buttonText == "по номеру телефона" ||
        buttonText == "Войти по e-mail"
      ) {
        this.hideBtn = buttonText;
      }
    },
    showCheckByCode() {
      this.activeLoginForm = CheckByCode;
    },
  },
};
</script>

<style lang="scss">
.login-block {
  padding: 43px 33px;
  background-color: rgb(255, 255, 255);
  &__login-form-by-mail {
  }

  &__other-ways-to-register-or-login {
  }
}
</style>