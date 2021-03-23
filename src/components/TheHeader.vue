<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <TheLogo class="header__logo" />
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from "./TheLogo.vue";

export default {
  components: { TheLogo },
  name: "TheHeader",
};
</script>

<style lang="scss">
.header {
  &__content {
  }

  &__logo {
  }
}
</style>