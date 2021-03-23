<template>
  <div class="other-ways-to-register-or-login">
    <p class="other-ways-to-register-or-login__title">
      {{ nameOfOtherMethods }}
    </p>

    <div class="other-ways-to-register-or-login__list">
      <TheButton
        v-for="btn in btnListNew"
        :key="btn.buttonText"
        :buttonText="btn.buttonText"
        :classModifier="btn.classModifier"
        :logoClass="btn.logoClass"
        @showActiveLoginForm="showActiveLoginForm(btn.buttonText)"
        class="other-ways-to-register-or-login__btn"
      />
    </div>
  </div>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: { TheButton },
  props: {
    nameOfOtherMethods: {
      type: String,
    },
    hideBtn: {
      type: String,
    },
  },
  name: "OtherWaysToRegisterOrLogin",
  data() {
    return {
      btnList: [
        {
          buttonText: "Войти по Сбербанк ID",
          classModifier: "btn_sber",
          logoClass: "",
        },
        {
          buttonText: "по номеру телефона",
          classModifier: "btn_tel",
          logoClass: "",
        },
        {
          buttonText: "Войти по e-mail",
          classModifier: "btn_email",
          logoClass: "",
        },
        {
          buttonText: "GMAIL",
          classModifier: "btn_gmail",
          logoClass: "btn_gmail-logo",
        },
        {
          buttonText: "FACEBOOK",
          classModifier: "btn_fcb",
          logoClass: "btn_fcb-logo",
        },
        {
          buttonText: "Вконтакте",
          classModifier: "btn_vk",
          logoClass: "btn_vk-logo",
        },
        {
          buttonText: "icloud",
          classModifier: "btn_icloud",
          logoClass: "btn_icloud-logo",
        },
      ],
    };
  },
  methods: {
    showActiveLoginForm(buttonText) {
      this.$emit("showActiveLoginForm", buttonText);
    },
  },
  computed: {
    btnListNew() {
      return this.btnList.filter((el) => el.buttonText !== this.hideBtn);
    },
  },
};
</script>

<style lang="scss">
.other-ways-to-register-or-login {
  &__title {
    text-align: center;
    color: #000000;
    margin-bottom: 23px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-self: stretch;

    li {
    }
  }

  &__btn {
    &_sber {
    }

    &_tel {
    }

    &_gmail {
    }

    &_fcb {
    }

    &_vk {
    }

    &_icloud {
    }
  }
}
</style>