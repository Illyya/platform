<template>
  <div class="questions-to-an-expert">
    <div class="questions-to-an-expert__photo-img">
      <picture>
        <source srcset="@/assets/img/operator-photo.webp" type="image/webp" />
        <img src="@/assets/img/operator-photo.png" alt="operator" />
      </picture>
    </div>

    <div class="questions-to-an-expert__text">
      <p class="questions-to-an-expert__top-text">У вас есть вопросы?</p>
      <p class="questions-to-an-expert__bottom-text">Мы вам поможем</p>
    </div>
    
    <img
      class="questions-to-an-expert__triangle"
      src="@/assets/img/triangle.png"
      alt="triangle"
    />
  </div>
</template>

<script>
export default {
  name: "QuestionsToAnExpert",
};
</script>

<style lang="scss">
.questions-to-an-expert {
  padding: 10px 76px 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);

  &__photo-img {
    margin-right: 25px;
    img {
      border-radius: 50%;
    }
  }

  &__text {
    color: #141414;
  }

  &__top-text {
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  &__bottom-text {
    font-size: 0.8125rem;
  }

  &__triangle {
    position: absolute;
    top: 100%;
    left: 80%;
    filter: drop-shadow(0px 4px 7px rgba(221, 222, 222, 0.5));
  }
}
</style>