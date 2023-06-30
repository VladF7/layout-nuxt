<template>
  <section id="achievements" class="container">
    <div class="container__background"></div>
    <div class="container__title-wrapper">
      <h2 class="container__title">
        WHAT OUR PARTNERS HAVE ACHIEVED WITH CUSTOM TRANSPORT MANAGEMENT SOFTWARE
      </h2>
    </div>

    <div class="container__main-sections">
      <div class="container__main-sections-slider">
        <Slider />
      </div>
      <div class="container__main-sections-text">
        <h3 class="container__main-sections-text-title">
          ERP system for construction materials factory
        </h3>

        <div class="container__main-sections-text-description">
          Custom logistics software includes several modules that enabled to fully digitalize a
          factory – Order and stock management optimization – Automatic invoicing and accounting –
          Delivery scheduling and route planning – Automatic contractors selection
        </div>
        <div class="container__main-sections-text-description">
          Eliminating manual work enabled the factory to double truck day load capacity (an increase
          from 45 to 92 trucks per day) and save over 60.000 EUR in the first year.
        </div>
      </div>
    </div>
    <div class="container__main-discuss">
      <div class="container__main-discuss-title">Discuss your project with the professionals</div>
      <div class="container__main-discuss-button">
        <Button buttonText="Let's discuss" />
      </div>
    </div>
  </section>
</template>

<script>
import Slider from './Slider.vue'
import Button from './Button.vue'
export default {
  comments: { Button, Slider },
  name: 'Achievements'
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}
.container__background {
  position: absolute;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../static/decorative-routes-thing-achivements.svg');
}
.container__title-wrapper {
  display: flex;
  justify-content: flex-end;
}
.container__title {
  max-width: 710px;
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1;
  text-align: right;
}
.container__main-sections {
  display: flex;
  align-items: center;
}
.container__main-sections-slider {
  display: flex;
}
.container__main-sections-text-title {
  @include font-style($black, 21px, Catamaran, -0.53px);
  line-height: 1;
}
.container__main-sections-text-description {
  margin: 24px 0;
  @include font-style($black, 15px, OpenSans, -0.38px);
  opacity: 0.75;
}
.container__main-discuss {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin-top: 157px;
  position: relative;
  transform: translate(-5%);
}
.container__main-discuss-title {
  width: 345px;
  @include font-style($black, 17px, Catamaran, -0.43px);
  line-height: 1.24;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container__main-discuss-button {
  margin-top: 45px;
  width: 345px;
  height: 72px;
}

// Small devices
@media (max-width: 639px) {
  .container {
    margin-top: 92px;
    padding: 0 15px;
  }
  .container__background {
    width: 178px;
    height: 363px;
    bottom: 249px;
    left: -15px;
  }
  .container__main-sections {
    margin-top: 103px;
    display: flex;
    flex-direction: column-reverse;
  }
  .container__main-sections-slider {
    margin-top: 46px;
    width: 100%;
  }
  .container__main-sections-text {
    width: 100%;
    padding: 0 10px;
  }
  .container__main-discuss {
    margin-top: 290px;
    margin-bottom: 77px;
    transform: translate(0);
  }
  .container__main-discuss-title {
    width: 100%;
  }
  .container__main-discuss-button {
    width: 100%;
    height: 56px;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    margin-top: 96px;
  }
  .container__title {
    margin: 0 91px;
    max-width: 510px;
  }
  .container__background {
    width: 200px;
    height: 363px;
    bottom: 192px;
    left: -66px;
  }
  .container__main-sections {
    margin-top: 96px;
  }
  .container__main-sections-slider {
    width: 50%;
    justify-content: center;
  }
  .container__main-sections-text {
    width: 50%;
    padding: 0 22px;
  }
  .container__main-sections-text-title {
    max-width: 325px;
  }
  .container__main-sections-text-description {
    max-width: 325px;
  }
  .container__main-discuss {
    margin-top: 256px;
    margin-bottom: 101px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .container {
    margin-top: 247px;
  }
  .container__title {
    margin: 0 253px;
    max-width: 710px;
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__background {
    width: 256px;
    height: 512px;
    bottom: 77px;
    left: -157px;
  }
  .container__title {
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__main-sections {
    margin-top: 103px;
  }
  .container__main-sections-slider {
    width: 50%;
    justify-content: flex-end;
  }
  .container__main-sections-text {
    width: 50%;
    padding-left: 97px;
  }
  .container__main-sections-text-title {
    @include font-style($black, 25px, Catamaran, -0.63px);
    line-height: 1.2;
    max-width: 345px;
  }
  .container__main-sections-text-description {
    margin: 10px 0;
    @include font-style($black, 17px, OpenSans, -0.43px);
    max-width: 345px;
  }
  .container__main-discuss {
    margin-top: 172px;
    margin-bottom: 229px;
    align-items: center;
  }
}
</style>
