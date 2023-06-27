<template>
  <div class="container">
    <section id="benefits" class="container__benefit">
      <div class="container__benefit-scroll-element">
        <ScrollElement
          scrollElementText="Scroll to see our advantages"
          scrollToLink="#advantages"
        />
      </div>
      <div class="container__benefit-main-section">
        <h2 class="container__benefit-main-section-title">
          <span class="container__benefit-main-section-title-row">HOW CAN YOU BENEFIT FROM </span>
          <span class="container__benefit-main-section-title-row">CUSTOM LOGISTICS SOFTWARE?</span>
        </h2>

        <ul class="container__benefit-main-section-items">
          <div class="container__benefit-main-section-items-background"></div>
          <li
            class="container__benefit-main-section-item"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="container__benefit-main-section-item-wrapper">
              <div class="container__benefit-main-section-item-circle">{{ index + 1 }}</div>
              <div class="container__benefit-main-section-item-text">
                <h4 class="container__benefit-main-section-item-text-title">{{ item.title }}</h4>
                <div class="container__benefit-main-section-item-text-description">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="container__discuss-section">
      <h3 class="container__discuss-section-title">
        <span class="container__discuss-section-title-row">YOUR BUSINESS CASE</span>
        <span class="container__discuss-section-title-row">IS COMPLETELY DIFFERENT?</span>
        <span class="container__discuss-section-title-row container__discuss-section-title-row_red"
          >LET’S DISCUSS
        </span>
      </h3>
      <div class="container__discuss-section-button">
        <Button buttonText="Fill in the contact form" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Benefits',
  components: { Button },
  data() {
    return {
      items: [
        {
          title: `Customized to your needs`,
          description: `A software is developed exclusively with your needs and plans in mind. This enables to solve unique problems efficiently`
        },
        {
          title: `Short-term ROI`,
          description: `You will experience the first returns right in the first month after integrating the system in your current processes`
        },
        {
          title: `Predictable scalability`,
          description: `A custom system grows along with your business since your company goals are taken into account in the development process`
        },
        {
          title: `Improve, not rebuild`,
          description: `Custom software supports and improves your running processes step-by-step. Your current system keeps working`
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.container__benefit {
  display: flex;
}
.container__benefit-scroll-element {
  display: none;
}
.container__benefit-main-section {
  z-index: 10;
  width: 100%;
  position: relative;
}
.container__benefit-main-section-title {
  padding: 0;
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1;
  z-index: 10;
  position: relative;
}
.container__benefit-main-section-items {
  position: relative;
  margin-top: 127px;
  margin-left: 88px;
  max-width: 1100px;
}
.container__benefit-main-section-item {
  z-index: 10;
  position: relative;
  display: inline-block;
  width: 528px;
  margin-top: 0;
}
.container__benefit-main-section-title-row {
  display: block;
}
.container__benefit-main-section-item-wrapper {
  display: flex;
  align-items: center;
}

.container__benefit-main-section-item-circle {
  margin-right: 35px;
  @include font-style(#fff, 19.6px, Catamaran, -0.49px);
  color: #fff;
  min-width: 80px;
  height: 80px;
  background-color: $pale-orange;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 10px 0px rgba(247, 147, 105, 0.5);
}
.container__benefit-main-section-item-text-title {
  @include font-style($black, 21px, Catamaran, -0.53px);
}
.container__benefit-main-section-item-text-description {
  margin-top: 20px;
  opacity: 0.75;
  max-width: 345px;
  @include font-style($black, 17px, OpenSans, -0.43px);
}
.container__benefit-main-section-items-background {
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 0;
}

.container__discuss-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin-top: 157px;
  position: relative;
  z-index: 10;
}
.container__discuss-section-title {
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container__discuss-section-title-row_red {
  color: $red;
}
.container__discuss-section-button {
  width: 345px;
  height: 72px;
  margin-top: 30px;
}

// Small devices
@media (max-width: 639px) {
  .container {
    margin-top: 192.8px;
    padding: 0 15px;
  }
  .container__benefit-main-section-items {
    margin-left: 0;
    margin-top: 178px;
    height: 703px;
    position: relative;
    width: 100%;
  }
  .container__benefit-main-section-item {
    display: flex;
    flex-direction: column;
    min-height: 25%;
    width: 100%;
  }
  .container__benefit-main-section-item-wrapper {
    align-items: flex-start;
  }
  .container__benefit-main-section-item-text-title {
    text-transform: uppercase;
    line-height: 1;
  }
  .container__benefit-main-section-item-text-description {
    max-width: 100%;
    @include font-style($black, 15px, OpenSans, -0.38px);
  }

  .container__benefit-main-section-items-background {
    width: 183px;
    height: 960px;
    background-image: url('../static/group-small.svg');
    top: -88px;
    left: 0;
    margin-left: -15px;
  }
  .container__discuss-section {
    margin-top: 140px;
  }
  .container__discuss-section-title {
    @include font-style($black, 21px, Catamaran, -0.53px);
    line-height: 1.19;
  }
  .container__discuss-section-button {
    width: 100%;
    height: 57px;
    margin-top: 41px;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    margin-top: 165px;
  }
  .container__benefit-main-section-title {
    padding: 0 92px;
  }

  .container__benefit-main-section-items {
    margin-top: 121px;
    margin-left: 58px;
  }
  .container__benefit-main-section-item {
    display: flex;
    flex-direction: column;
    margin-top: 63px;
    &:nth-child(1) {
      height: 250px;
    }
  }
  .container__benefit-main-section-item-text-description {
    margin-top: 10px;
  }
  .container__benefit-main-section-items-background {
    width: 960px;
    height: 608px;
    background-image: url('../static/group.svg');
    rotate: 90deg;
    top: 105px;
    left: -263px;
  }
}

@media (min-width: 1024px) and (max-width: 1224px) {
  .container {
    margin-top: 271px;
  }
  .container__benefit-scroll-element {
    width: 10%;
    display: block;
  }
  .container__benefit-main-section {
    width: 90%;
  }
  .container__benefit-main-section-title {
    width: 710px;
    padding-left: 142px;
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__benefit-main-section-item {
    margin-top: 46px;
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  .container__benefit-main-section-item-text-title {
    @include font-style($black, 25px, Catamaran, -0.63px);
  }
  .container__benefit-main-section-items-background {
    width: 960px;
    height: 608px;
    background-image: url('../static/group.svg');
    rotate: 90deg;
    top: 112px;
    left: -265px;
  }
}

//Large devices
@media (min-width: 1225px) {
  .container {
    margin-top: 271px;
  }
  .container__benefit-scroll-element {
    width: 10%;
    display: block;
  }
  .container__benefit-main-section {
    width: 90%;
  }
  .container__benefit-main-section-title {
    width: 710px;
    padding-left: 142px;
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__benefit-main-section-item {
    &:nth-child(4),
    &:nth-child(5) {
      .container__benefit-main-section-item-wrapper {
        margin-top: 46px;
      }
    }
    &:nth-child(3),
    &:nth-child(5) {
      width: 480px;
    }
  }
  .container__benefit-main-section-item-text-title {
    @include font-style($black, 25px, Catamaran, -0.63px);
  }
  .container__benefit-main-section-items-background {
    width: 960px;
    height: 608px;
    background-image: url('../static/group.svg');
    top: -63px;
    left: -87px;
  }
}
</style>
