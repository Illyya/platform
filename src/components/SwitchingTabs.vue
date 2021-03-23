<template>
  <div class="switching-tabs">
    <div
      @click="activeLogin"
      class="switching-tabs__login-tab"
      :class="{ 'active-tab': loginOrRegistration == 'LoginBlock' }"
    >
      Вход
    </div>

    <div
      @click="activeRegistration"
      class="switching-tabs__registration-tab"
      :class="{ 'active-tab': loginOrRegistration == 'RegistrationBlock' }"
    >
      Регистрация
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchingTabs",
  props: {
    loginOrRegistration: {
      type: String,
    },
  },
  methods: {
    activeLogin() {
      this.$emit("activeLogin");
    },
    activeRegistration() {
      this.$emit("activeRegistration");
    },
  },
};
</script>

<style lang="scss">
.switching-tabs {
  display: flex;
  font-weight: 600;
  font-size: 0.8125rem;
  color: #b1b1b1;
  text-transform: uppercase;

  & > * {
    padding: 20px 0 24px 0;
    flex: 1;
    text-align: center;
    border-top: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background-color: #fafafa;
    cursor: pointer;
  }
  &__login-tab {
    margin-right: 4px;
  }

  &__registration-tab {
  }

  .active-tab {
    color: #72af32;
    border: none;
    background-color: white;
  }
}
</style>