<template>
  <div class="swiper-container">
    <div
      ref="swiper"
      class="swiper-container__swiper swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @slideChange="handleSlideChange"
    >
      <div class="swiper-container__swiper-wrapper swiper-wrapper">
        <div
          class="swiper-container__swiper-slide swiper-slide"
          v-for="(slde, index) in slides"
          :key="index"
        >
          <h4 class="swiper-container__swiper-slide-title">{{ slde.title }}</h4>
          <div class="swiper-container__swiper-slide-description">{{ slde.description }}</div>
        </div>
      </div>
      <div class="swiper-container__swiper-toolbar">
        <div class="swiper-container__swiper-toolbar-buttons">
          <button
            :class="{ 'swiper-container__swiper-toolbar-buttons-button_disabled': isFirstSlide }"
            class="swiper-container__swiper-toolbar-buttons-button swiper-container__swiper-toolbar-buttons-button_prev"
          ></button>
          <button
            :class="{ 'swiper-container__swiper-toolbar-buttons-button_disabled': isLastSlide }"
            class="swiper-container__swiper-toolbar-buttons-button swiper-container__swiper-toolbar-buttons-button_next"
          ></button>
        </div>
        <div class="swiper-container__swiper-toolbar-pagination-wrapper">
          <div class="swiper-container__swiper-toolbar-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper-nuxt',
  data() {
    return {
      isFirstSlide: true,
      isLastSlide: false,
      slides: [
        {
          title: `Overwhelming and inaccurate paperwork`,
          description: `Most documents, such as orders, invoices, contracts, etc. are stored in folders on endless shelves. They are never easy to find. Moreover, due to human factor, crucial mistakes take place that cost your company much time to solve, but also drain your budget.`
        },
        {
          title: `Manual order management based on phone calls and emails`,
          description: `Do your clients call you just to find out that the necessary product is currently out of stock? You waste resources by not providing them with actual information about your available inventory online`
        },
        {
          title: `Inefficient truck load`,
          description: `Without dynamic truck load scheduling, your company misses up to 50% of the potential loading capability`
        }
      ],
      swiperOptions: {
        loop: false,
        centeredSlides: false,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
          el: '.swiper-container__swiper-toolbar-pagination',
          bulletClass: 'swiper-container__swiper-toolbar-pagination-bullet',
          bulletActiveClass: 'swiper-container__swiper-toolbar-pagination-bullet-active',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 15
          },
          1023: {
            slidesPerView: 'auto',
            spaceBetween: 15
          },
          639: {
            slidesPerView: 'auto',
            spaceBetween: 0
          }
        },
        navigation: {
          nextEl: '.swiper-container__swiper-toolbar-buttons-button_next',
          prevEl: '.swiper-container__swiper-toolbar-buttons-button_prev'
        }
      }
    }
  },
  methods: {
    handleSlideChange() {
      const prevButton = document.querySelector(
        '.swiper-container__swiper-toolbar-buttons-button_prev'
      )
      const nextButton = document.querySelector(
        '.swiper-container__swiper-toolbar-buttons-button_next'
      )
      if (this.$refs.swiper.swiper.realIndex === 0) {
        prevButton.disabled = true
        this.isFirstSlide = true
      } else {
        prevButton.disabled = false
        this.isFirstSlide = false
      }
      if (this.$refs.swiper.swiper.realIndex === this.slides.length - 1) {
        nextButton.disabled = true
        this.isLastSlide = true
      } else {
        nextButton.disabled = false
        this.isLastSlide = false
      }
    }
  }
}
</script>

<style lang="scss">
.swiper-container-container {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.swiper-container__swiper {
  width: 100%;
}
.swiper-container__swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
}
.swiper-container__swiper-slide {
  box-shadow: 0 10px 30px 0 rgba(8, 61, 119, 0.25);
  background-color: $twilight-blue;
  .swiper-container__swiper-slide-title {
    @include font-style(#fff, 21px, OpenSans, -0.53px);
    color: #fff;
    font-weight: bold;
    line-height: 1.19;
  }
  .swiper-container__swiper-slide-description {
    margin: 24px 0 0 0;
    @include font-style(#fff, 15px, OpenSans, -0.38px);
    color: #fff;
  }
}

.swiper-container__swiper-toolbar {
  display: flex;
  position: relative;
}
.swiper-container__swiper-toolbar-buttons {
  display: flex;
}
.swiper-container__swiper-toolbar-buttons-button {
  width: 70px;
  height: 70px;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../static/next-button.svg');
  &:hover {
    filter: brightness(94%);
  }
}
.swiper-container__swiper-toolbar-buttons-button_prev {
  rotate: 180deg;
}
.swiper-container__swiper-toolbar-buttons-button_disabled {
  opacity: 0.25;
}
.swiper-container__swiper-toolbar-pagination-wrapper {
  position: relative;
  width: 100%;
}
.swiper-container__swiper-toolbar-pagination {
  transform: translate(-50%, -50%);
  left: 30%;
  top: 50%;
  position: absolute;
  display: flex;
}
.swiper-container__swiper-toolbar-pagination-bullet {
  width: 14px;
  height: 14px;
  margin: 8px;
  opacity: 0.2;
  border-radius: 100%;
  background-color: $charcoal;
}
.swiper-container__swiper-toolbar-pagination-bullet-active {
  opacity: 1;
}

// Small devices
@media (max-width: 639px) {
  .swiper-container__swiper-slide {
    width: 100%;
    height: 375px;
    padding: 92px 30px;
    .swiper-container__swiper-slide-title {
      line-height: 1;
    }
  }
  .swiper-container__swiper-toolbar {
    flex-direction: row-reverse;
  }
  .swiper-container__swiper-toolbar-pagination {
    left: 50%;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .swiper-container__swiper-slide {
    width: 375px;
    height: 368px;
    padding: 87px 15px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .swiper-container__swiper-slide {
    width: 420px;
    height: 368px;
    padding: 67px 37px;
    .swiper-container__swiper-slide-title {
      @include font-style(#fff, 21px, OpenSans, -0.53px);
      color: #fff;
    }
    .swiper-container__swiper-slide-description {
      margin: 22px 0 0 0;
      @include font-style(#fff, 17px, OpenSans, -0.43px);
      color: #fff;
    }
  }
}
</style>
