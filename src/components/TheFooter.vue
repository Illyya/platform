<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <p class="footer__text">© 2020 Trader-Oil. All rights reserved</p>
        <p class="footer__text">Правила использования</p>
        <p class="footer__text">Политика конфеденциальности</p>
      </div>

      <QuestionsToAnExpert class="footer__questions-to-an-expert" />
    </div>
  </footer>
</template>

<script>
import QuestionsToAnExpert from "./QuestionsToAnExpert.vue";

export default {
  components: { QuestionsToAnExpert },
  name: "TheFooter",
};
</script>

<style lang="scss">
.footer {
  position: relative;
  &__content {
    display: flex;

    @media (max-width: 717px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  &__text {
    font-size: 0.8125rem;
    color: #0f0f0f;
    opacity: 0.5;
    margin-right: 26px;

    @media (max-width: 717px) {
      margin: 0 0 20px 0;
    }

    &:first-of-type {
      color: #b1b1b1;
      opacity: 1;
      margin-right: 248px;

      @media (max-width: 717px) {
        margin: 0 0 20px 0;
      }
    }
  }

  &__questions-to-an-expert {
    position: absolute;
    bottom: 46px;

    @media (max-width: 717px) {
      bottom: 146px;
    }
  }
}
</style>