<template>
  <div class="remember-me-input">
    <input
      type="checkbox"
      name="rememberMe"
      id="rememberMe"
      class="remember-me-input__input"
    />

    <label
      v-if="showRememberMeLabel"
      for="rememberMe"
      class="remember-me-input__label"
      >Запомнить меня</label
    >
    
    <p
      v-if="showPasswordHint"
      @click="showCheckByCode"
      class="remember-me-input__text"
    >
      Забыли пароль?
    </p>
  </div>
</template>

<script>
export default {
  name: "RememberMeInput",
  props: {
    showPasswordHint: {
      type: Boolean,
    },
    showRememberMeLabel: {
      type: Boolean,
    },
  },
  methods: {
    showCheckByCode() {
      this.$emit("showCheckByCode");
    },
  },
};
</script>

<style lang="scss">
.remember-me-input {
  display: flex;
  color: #000000;
  font-size: 0.75rem;
  &__input {
    display: none;

    &:checked + label::before {
      content: "\2714";
    }
  }

  &__label {
    margin-right: auto;
    user-select: none;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #e9e9e9;
      border-radius: 2px;
      text-align: center;
      vertical-align: middle;
      margin-right: 10px;
    }
  }

  &__text {
    text-decoration: underline;
    text-decoration-color: #e0e0e0;
    cursor: pointer;
  }
}
</style>