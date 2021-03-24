<template>
  <div class="label-and-input-for-form">
    <label 
      :for="nameInput" 
      class="label-and-input-for-form__label"
    >
      {{ nameLabel }}
      <div class="label-and-input-for-form__tooltip">
        ?
        <span class="label-and-input-for-form__tooltip-text">
          <img
            class="label-and-input-for-form__triangle"
            src="@/assets/img/triangle.png"
            alt="triangle"
          />
          {{ hintText }}
        </span>
      </div>
    </label>

    <input-mask
      v-if="typeInput == 'tel'"
      :name="nameInput"
      :id="idInput"
      :placeholder="placeholderInput"
      v-model="inputData[nameInput]"
      @input="sendInputData"
      maskChar="#"
      mask="+7\ (999) 999-99-99"
      class="label-and-input-for-form__input"
    >
    </input-mask>
    <input
      v-else
      :name="nameInput"
      :id="idInput"
      :type="typeInputInComputed"
      :placeholder="placeholderInput"
      v-model.trim="inputData[nameInput]"
      @change="sendInputData"
      class="label-and-input-for-form__input"
    />

    <div
      @click="showOrHidePassword"
      :class="{
        'label-and-input-for-form__eye-icon': isTypeInputComputedPassword,
        'label-and-input-for-form__eye-icon-1': isTypeInputText,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LabelAndInputForForm",
  props: {
    nameInput: {
      type: String,
    },
    nameLabel: {
      type: String,
    },
    hintText: {
      type: String,
    },
    idInput: {
      type: String,
    },
    typeInput: {
      type: String,
    },
    placeholderInput: {
      type: String,
    },
  },
  data() {
    return {
      typeInputInData: this.typeInput,
      isTypeInputText: false,
      inputData: {}
    };
  },
  methods: {
    sendInputData() {
      if (this.inputData.fullName) {
        const newFullName = this.inputData.fullName
          .replace(/\s+/g, " ")
          .split(' ')
          .map((el) => el ? el[0].toUpperCase() + el.slice(1) : null);

        newFullName[0] ? this.inputData.firstName = newFullName[0] : null;
        newFullName[1] ? this.inputData.secondName = newFullName[1] : null;
        newFullName[2] ? this.inputData.thirdName = newFullName[2] : null;       

        delete this.inputData.fullName
      }

      this.$emit('sendInputData', this.inputData);
    },
    showOrHidePassword() {
      if (this.typeInputInData == "text") {
        this.typeInputInData = "password";
        this.isTypeInputText = false;
      } else {
        this.typeInputInData = "text";
        this.isTypeInputText = true;
      }
    },
  },
  computed: {
    typeInputInComputed() {
      return this.typeInputInData;
    },
    isTypeInputComputedPassword() {
      return this.typeInputInComputed == "password";
    },
  },
};
</script>

<style lang="scss">
.label-and-input-for-form {
  position: relative;
  border-radius: 2px;
  color: #828282;

  &__label {
    position: absolute;
    top: 7px;
    left: 12px;
    font-size: 0.625rem;
  }

  &__tooltip {
    position: relative;
    width: 13px;
    display: inline-block;
    text-align: center;
    font-size: 0.5625rem;
    color: #cecece;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    margin-left: 6px;
    cursor: pointer;

    &:hover {
      .label-and-input-for-form__tooltip-text {
        display: block;
      }
    }
  }

  &__tooltip-text {
    position: absolute;
    padding: 7.5px 13px;
    display: none;
    width: max-content;
    max-width: 200px;
    top: -100%;
    left: 300%;
    font-size: 0.5625rem;
    border: 1px solid #e0e0e0;
    background-color: white;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-center {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    z-index: 10;
  }

  &__triangle {
    position: absolute;
    width: 10px;
    left: -10%;
    transform: rotate(90deg);
    filter: drop-shadow(0px 4px 7px rgba(247, 15, 15, 0.14));
  }

  &__input {
    padding: 35px 12px 5px 12px;
    width: 100%;
    font-size: 0.875rem;
    border: 1px solid #e0e0e0;
    transition: 0.2s ease-out;

    &::placeholder {      
      color: #828282;
    }

    &:focus {
      border-color: #000000;
    }

    &:invalid {
      border-color: rgb(207, 33, 33);
    }
  }

  &__eye-icon {
    position: absolute;
    display: block;
    top: 50%;
    right: 20px;
    width: 14px;
    height: 14px;
    transform: translateY(-50%);
    background: url(~@/assets/img/svg/eye.svg) no-repeat;
    cursor: pointer;
  }

  &__eye-icon-1 {
    position: absolute;
    display: block;
    top: 50%;
    right: 20px;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    background: url(~@/assets/img/svg/eye1.svg) no-repeat;
    cursor: pointer;
  }
}
</style>