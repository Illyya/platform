<template>
  <div class="check-by-code">
    <p class="check-by-code__title">Проверка кода</p>

    <FormCheckByCode class="check-by-code__form-check-by-code" />

    <div class="check-by-code__row-text-bottom">
      <p class="check-by-code__row-text-left">
        Через 59 сек<br />
        <span>Отправить ещё</span>
      </p>

      <p class="check-by-code__row-text-right">
        Изменить номер<br />
        Не приходит СМС?
      </p>
    </div>
  </div>
</template>

<script>
import FormCheckByCode from "./FormCheckByCode.vue";

export default {
  components: { FormCheckByCode },
  name: "CheckByCode",
};
</script>

<style lang="scss">
.check-by-code {
  margin-bottom: 41px;
  
  &__title {
    text-align: center;
    font-size: 1.3125rem;
    color: #000000;
    margin-bottom: 30px;
  }

  &__form-check-by-code {
    margin-bottom: 31px;
  }

  &__row-text-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    line-height: 19px;
  }

  &__row-text-left {
    color: #828282;
    cursor: pointer;

    span {
      text-decoration: underline;
      text-decoration-color: #e0e0e0;
    }
  }

  &__row-text-right {
    text-decoration: underline;
    text-decoration-color: #e0e0e0;
    cursor: pointer;
  }
}
</style>