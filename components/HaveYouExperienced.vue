<template>
  <div class="container">
    <h2 class="container__title">Have you experienced any of these issues?</h2>
    <div class="container__carousel">
      <Carousel />
    </div>
    <div class="container__expenses-reduction">
      <div class="container__expenses-reduction-description">
        Expenses reduction after implementing logistics management software!
      </div>
      <h3 class="container__expenses-reduction-percent">49,2 %</h3>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
export default {
  name: 'HaveYouExperienced',
  components: { Carousel }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 168px;
  max-width: 100%;
  padding: 0;
}
.container__title {
  margin: 0;
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1;
  text-transform: uppercase;
  text-align: right;
}
.container__carousel {
  width: 100%;
}
.container__expenses-reduction {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 178px;
}
.container__expenses-reduction-description {
  width: 258.6px;
  height: 75.2px;
  opacity: 0.75;
  @include font-style($charcoal, 18.8px, OpenSans, -0.47px);
  line-height: 1.2;
}
.container__expenses-reduction-percent {
  width: 259.4px;
  height: 75.2px;
  @include font-style($charcoal, 80px, Catamaran, 1px);
  line-height: 0.85;
}

// Small devices
@media (max-width: 639px) {
  .container {
    margin-top: 50px;
  }
  .container__title {
    padding: 0 15px;
  }
  .container__carousel {
    margin-top: 50px;
  }
  .container__expenses-reduction {
    flex-direction: column;
    margin-top: 163px;
  }
  .container__expenses-reduction-percent {
    margin-top: 28px;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    margin-top: 144px;
  }
  .container__title {
    padding: 0 91px 0 92px;
  }
  .container__carousel {
    margin-top: 165px;
  }
  .container__expenses-reduction {
    margin-top: 164px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .container {
    margin-top: 168px;
  }
  .container__title {
    padding: 0 253px 0 284px;
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: normal;
  }
  .container__carousel {
    margin-top: 168px;
  }
  .container__expenses-reduction {
    margin-top: 178px;
  }
  .container__expenses-reduction-description {
    width: 345px;
    height: 100px;
    @include font-style($charcoal, 25px, OpenSans, -0.63px);
  }
  .container__expenses-reduction-percent {
    width: 345px;
    height: 100px;
    @include font-style($charcoal, 110px, Catamaran, 0px);
    line-height: 0.85;
  }
}
</style>
