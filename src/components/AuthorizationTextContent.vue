<template>
  <div class="authorization-text-content">
    <TitleH1 class="authorization-text-content__title-h1" />

    <ListOfBenefits class="authorization-text-content__list-of-benefits" />
  </div>
</template>

<script>
import ListOfBenefits from "./ListOfBenefits.vue";
import TitleH1 from "./TitleH1.vue";

export default {
  components: { TitleH1, ListOfBenefits },
  name: "AuthorizationTextContent",
};
</script>

<style lang="scss">
.authorization-text-content {
  max-width: 560px;

  @media (max-width: 884px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  
  &__title-h1 {
    margin-bottom: 44px;

    @media (max-width: 884px) {
      text-align: center;
    }

    @media (max-width: 606px) {
      line-height: 1.2;
    }

    @media (max-width: 410px) {
      font-size: 2rem;
    }
  }

  &__list-of-benefits {
  }
}
</style>