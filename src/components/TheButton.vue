<template>
  <div 
    @click="showActiveLoginForm" 
    :class="classModifier"
    class="btn" 
  >
    <div :class="logoClass"></div>
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    buttonText: {
      type: String,
    },
    classModifier: {
      type: String,
    },
    logoClass: {
      type: String,
    },
  },
  methods: {
    showActiveLoginForm() {
      this.$emit("showActiveLoginForm");
    },
  },
};
</script>

<style lang="scss">
.btn {
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.5625rem;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.06);
  }

  &_form {
    grid-column: 1 / 3;
    padding: 20px 0;
    font-weight: 600;
    font-size: 0.8125rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: white;
    border-radius: 2px;
    background: linear-gradient(107.75deg, #72af32 0%, #4b9b3f 100%),
      linear-gradient(76.59deg, #6c9e39 1.93%, #79b041 98.89%);

    &:hover {
      transform: none;
      filter: hue-rotate(120deg);
    }
  }

  &_sber,
  &_tel,
  &_email {
    border: 1px solid #e0e0e0;
  }

  &_sber {
  }

  &_tel {
  }

  &_gmail {
    background: #efefef;
  }

  &_gmail-logo {
    width: 17px;
    height: 17px;
    background: url(~@/assets/img/svg/google.svg) no-repeat;
    margin-right: 6px;
  }

  &_fcb,
  &_vk,
  &_icloud {
    color: white;
  }

  &_fcb {
    background: #39569a;
  }

  &_fcb-logo {
    width: 16px;
    height: 16px;
    background: url(~@/assets/img/svg/facebook.svg) no-repeat;
    margin-right: 10px;
  }

  &_vk {
    background: #5181b8;
  }

  &_vk-logo {
    width: 20px;
    height: 20px;
    background: url(~@/assets/img/svg/vk.svg) no-repeat;
    margin-right: 6px;
  }

  &_icloud {
    background: #2196f3;
  }

  &_icloud-logo {
    width: 21px;
    height: 16px;
    background: url(~@/assets/img/svg/icloud.svg) no-repeat;
    margin-right: 6px;
  }
}
</style>