<template>
  <dl class="list-of-benefits">
    <div class="list-of-benefits__block-benefit">
      <div class="list-of-benefits__benefits-icon list-of-benefits__benefits-icon_price-dynamics"></div>
      <dt class="list-of-benefits__benefit">
        Удобное отслеживание динамики цен
      </dt>
      <dt class="list-of-benefits__description">
        Краткое описание преимущества в пару строк
      </dt>
    </div>

    <div class="list-of-benefits__block-benefit">
      <div class="list-of-benefits__benefits-icon list-of-benefits__benefits-icon_fast-registration"></div>
      <dt class="list-of-benefits__benefit">Быстрое оформление</dt>
      <dt class="list-of-benefits__description">
        Краткое описание преимущества в пару строк
      </dt>
    </div>
    
    <div class="list-of-benefits__block-benefit">
      <div class="list-of-benefits__benefits-icon list-of-benefits__benefits-icon_wide-selection"></div>
      <dt class="list-of-benefits__benefit">Широкий выбор</dt>
      <dt class="list-of-benefits__description">
        Краткое описание преимущества в пару строк
      </dt>
    </div>
  </dl>
</template>

<script>
export default {
  name: "ListOfBenefits",
};
</script>

<style lang="scss">
.list-of-benefits {
  
  &__block-benefit {
    position: relative;
    padding: 0 0 0 88px;

    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }

  &__benefits-icon {
    position: absolute;
    top: -10px;
    left: 0;
    width: 63px;
    height: 63px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
    &_price-dynamics {
      background: url(~@/assets/img/svg/report.svg) no-repeat 50%;
    }

    &_fast-registration {
      background: url(~@/assets/img/svg/list.svg) no-repeat 50%;
    }

    &_wide-selection {
      background: url(~@/assets/img/svg/oil.svg) no-repeat 50%;
    }
  }

  &__benefit {
    max-width: 212px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  &__description {
    max-width: 212px;
    font-size: 0.8125rem;
  }
}
</style>