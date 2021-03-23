<template>
  <form
    @submit.prevent="sendingData"
    action="#"
    class="registration-form-by-mail"
  >
    <LabelAndInputForForm
      v-for="input in inputList"
      :key="input.id"
      :nameInput="input.nameInput"
      :idInput="input.idInput"
      :typeInput="input.typeInput"
      :placeholderInput="input.placeholderInput"
      :nameLabel="input.nameLabel"
      :hintText="input.hintText"
      class="registration-form-by-mail__label-and-input-for-form"
    />    

    <button
      type="submit"
      class="registration-form-by-mail__btn_form btn btn_form"
    >
      Зарегистироваться
    </button>
  </form>
</template>

<script>
import { sendingData } from "../api/api.js";
import LabelAndInputForForm from "./LabelAndInputForForm.vue";

export default {
  name: "RegistrationFormByMail",
  components: { LabelAndInputForForm },
  data() {
    return {
      inputList: [
        {
          nameInput: "fullName",
          idInput: "fullName",
          typeInput: "text",
          placeholderInput: "Константинопольский Константин Конст...",
          nameLabel: "ФИО",
          hintText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          nameInput: "tel",
          idInput: "tel",
          typeInput: "tel",
          placeholderInput: "+7 (900) 000-00-00",
          nameLabel: "Телефон",
          hintText: "Подсказка",
        },
        {
          nameInput: "email",
          idInput: "email",
          typeInput: "email",
          placeholderInput: "exsample@mail.com",
          nameLabel: "E-mail",
          hintText: "Подсказка",
        },
        {
          nameInput: "password",
          idInput: "password",
          typeInput: "password",
          placeholderInput: "_",
          nameLabel: "Пароль",
          hintText: "Подсказка",
        },
      ],
    };
  },
  methods: {
    sendingData() {
      sendingData();
    },
  },
};
</script>

<style lang="scss">
.registration-form-by-mail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 17px;

  @media (max-width: 410px) {
    display: flex;
    flex-direction: column;
  }

  &__label-and-input-for-form {
    &:nth-of-type(1),
    &:nth-of-type(4) {
      grid-column: 1 / 3;
    }
  }

  &__btn {
    &_form {
    }
  }
}
</style>