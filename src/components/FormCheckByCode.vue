<template>
  <form @submit.prevent action="#" class="form-check-by-code">
    <input type="text" maxlength="1" class="form-check-by-code__input" />
    <input type="text" maxlength="1" class="form-check-by-code__input" />
    <input type="text" maxlength="1" class="form-check-by-code__input" />
    <input type="text" maxlength="1" class="form-check-by-code__input" />
  </form>
</template>

<script>
export default {
  name: "FormCheckByCode",
};
</script>

<style lang="scss">
.form-check-by-code {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 67px;
    height: 56px;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    transition: 0.2s ease-out;

    &:focus {
      border-color: #72af32;
    }
  }
}
</style>