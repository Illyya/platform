<template>
  <div class="authorization">
    <div class="container">
      <div class="authorization__content">
        <AuthorizationTextContent class="authorization__authorization-text-content" />

        <LoginAndRegistrationBlock class="authorization__login-and-registration-block" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorizationTextContent from "./AuthorizationTextContent.vue";
import LoginAndRegistrationBlock from "./LoginAndRegistrationBlock.vue";

export default {
  components: { AuthorizationTextContent, LoginAndRegistrationBlock },
  name: "AuthorizationContent",
};
</script>

<style lang="scss">
.authorization {
  padding: 0 0 0 83px;
  margin-bottom: 148px;

  @media (max-width: 884px) {
    padding: 0;
  }
  
  &__content {
    display: flex;
    justify-content: space-between;

    @media (max-width: 884px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__authorization-text-content {
    padding: 29px 0 0 0;
  }

  &__login-and-registration-block {
  }
}
</style>