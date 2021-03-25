<template>
  <div class="check-by-code">
    <p class="check-by-code__title">Проверка кода</p>

    <FormCheckByCode class="check-by-code__form-check-by-code" />

    <div class="check-by-code__row-text-bottom">
      <div class="check-by-code__row-text-left">
        <p>Через 59 сек</p>
        <button>Отправить ещё</button>
      </div>

      <button class="check-by-code__row-text-right">
        <button>Изменить номер</button>
        <button>Не приходит СМС?</button>
      </button>
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

    button {
      text-decoration: underline;
      text-decoration-color: #e0e0e0;
      text-underline-offset: 3px;      
      background-color: transparent;
      transition: .2s ease-out;

      &:hover {
        text-decoration-color: #000000;
      }
    }
  }
  &__row-text-left,
  &__row-text-right {    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__row-text-left {    
    color: #828282;

    button {
      color: inherit;
    }
  }

  &__row-text-right {        
    align-items: flex-end;
  }
}
</style>