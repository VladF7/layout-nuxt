<template>
  <section id="logistic" class="container">
    <div class="container__decorative-routes-thing-small"></div>
    <div class="container__main-section">
      <div class="container__main-section-wrapper">
        <h1 class="container__main-section-title">Logistic management software development</h1>
        <div class="container__main-section-description">
          We solve transportation and stock management problems for Factories, Manufacturers,
          Carriers, Resellers, E-commerce and even more. Any issue can be solved with smart
          digitalization.
        </div>
        <div class="container__main-section-button">
          <div class="container__main-section-button-component">
            <Button @handleClick="openMoodal" buttonText="Request a free consultation" />
          </div>
        </div>
      </div>
    </div>
    <div class="container__decorative-routes-thing-big">
      <div class="container__decorative-routes-thing-big-image"></div>
    </div>
  </section>
</template>

<script>
import ScrollElement from './ScrollElement.vue'
import Button from './Button.vue'
export default {
  name: 'LogisticManagement',
  components: { ScrollElement, Button },
  methods: {
    openMoodal() {
      this.$store.commit('openModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
.container__decorative-routes-thing-small {
  width: 127px;
  height: 226px;
  position: absolute;
  top: 27px;
  left: 0;
  object-fit: contain;
  background-image: url('../static/decorative-routes-thing-small.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.container__main-section {
  justify-content: flex-start;
}
.container__decorative-routes-thing-big {
  display: flex;
  justify-content: flex-end;
}
.container__main-section-title {
  text-transform: uppercase;
}
.container__main-section-description {
  opacity: 0.75;
  @include font-style($charcoal, 17px, OpenSans, -0.43px);
  position: relative;
}
.container__main-section-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.container__main-section-button-component {
  width: 345px;
  height: 72px;
}

.container__decorative-routes-thing-big-image {
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../static/decorative-routes-thing-medium.svg');
}

// Small devices
@media (max-width: 639px) {
  .container {
    margin-top: 92px;
    flex-direction: column;
  }
  .container__main-section {
    padding: 0 25px;
  }
  .container__main-section-title {
    margin: 0;
    @include font-style($black, 30px, Catamaran, -0.75px);
    line-height: 1;
  }
  .container__main-section-description {
    margin: 50px 0 0 0;
  }
  .container__main-section-button {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
  .container__main-section-button-component {
    width: 100%;
    height: 57px;
  }
  .container__decorative-routes-thing-big {
    margin-top: 44px;
    width: 100%;
  }
  .container__decorative-routes-thing-big-image {
    width: 178px;
    height: 363px;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    margin-top: 38px;
  }
  .container__main-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70%;
  }
  .container__main-section-wrapper {
    max-width: 452px;
  }
  .container__main-section-title {
    margin: 146px 0 0 0;
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__main-section-description {
    margin: 68px 0 0 0;
  }
  .container__main-section-button {
    padding-top: 87px;
  }
  .container__decorative-routes-thing-big {
    width: 30%;
  }

  .container__decorative-routes-thing-big-image {
    width: 195px;
    height: 522px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .container {
    margin-top: 107px;
  }
  .container__main-section {
    width: 62%;
    padding-left: 95px;
  }
  .container__decorative-routes-thing-big {
    width: 38%;
  }

  .container__main-section-title {
    margin: 61px 0 0 0;
    @include font-style($black, 55px, Catamaran, -1.38px);
    line-height: 1;
  }
  .container__main-section-description {
    margin: 49px 146px 0 0;
    @include font-style($charcoal, 21px, OpenSans, -0.53px);
    max-width: 927px;
  }
  .container__main-section-button {
    padding-top: 62px;
  }
  .container__decorative-routes-thing-big-image {
    width: 415px;
    height: 522px;
    background-image: url('../static/decorative-routes-thing-big.svg');
  }
}
</style>
