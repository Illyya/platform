<template>
  <div class="login-and-registration-block">
    <SwitchingTabs
      :loginOrRegistration="loginOrRegistration"
      @activeLogin="activeLogin"
      @activeRegistration="activeRegistration"
      class="login-and-registration-block__switching-tabs"
    />

    <component :is="loginOrRegistration" />
  </div>
</template>

<script>
import RegistrationBlock from "./RegistrationBlock.vue";
import LoginBlock from "./LoginBlock.vue";
import SwitchingTabs from "./SwitchingTabs.vue";

export default {
  components: { SwitchingTabs, RegistrationBlock, LoginBlock },
  name: "LoginAndRegistrationBlock",
  data() {
    return {
      loginOrRegistration: "RegistrationBlock",
    };
  },
  methods: {
    activeLogin() {
      this.loginOrRegistration = "LoginBlock";
    },
    activeRegistration() {
      this.loginOrRegistration = "RegistrationBlock";
    },
  },
};
</script>

<style lang="scss">
.login-and-registration-block {
  width: 408px;
  min-width: 408px;

  @media (max-width: 410px) {
    width: 320px;
    min-width: 320px;
  }
  &__switching-tabs {
  }

  &__registration-block {
  }

  &__login-block {
  }
}
</style>