<template>
  <div class="registration-block">
    <RegistrationFormByMail class="registration-block__registration-form-by-mail" />

    <p class="registration-block__text-of-agreement">
      Создавая аккаунт, вы соглашаетесь с правилами платформы и обработкой
      персональных данных
    </p>

    <OtherWaysToRegisterOrLogin
      :nameOfOtherMethods="nameOfOtherMethods"
      :hideBtn="hideBtn"
      class="registration-block__other-ways-to-register-or-login"
    />
  </div>
</template>

<script>
import OtherWaysToRegisterOrLogin from "./OtherWaysToRegisterOrLogin.vue";
import RegistrationFormByMail from "./RegistrationFormByMail.vue";

export default {
  components: { RegistrationFormByMail, OtherWaysToRegisterOrLogin },
  name: "RegistrationBlock",
  data() {
    return {
      nameOfOtherMethods: "Другие способы регистрации",
      hideBtn: "Войти по e-mail",
    };
  },
};
</script>

<style lang="scss">
.registration-block {
  padding: 43px 33px;
  background-color: rgb(255, 255, 255);
  &__registration-form-by-mail {
  }

  &__text-of-agreement {
    text-align: center;
    font-size: 0.625rem;
    line-height: 16px;
    color: #545454;
    margin-bottom: 30px;
  }

  &__other-ways-to-register-or-login {
  }
}
</style>