<template>
  <div class="container">
    <div
      ref="swiper"
      class="container__swiper swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @slideChange="handleSlideChange"
    >
      <div class="container__swiper-wrapper swiper-wrapper">
        <div
          class="container__swiper-slide swiper-slide"
          v-for="(slde, index) in slides"
          :key="index"
        >
          <h4 class="container__swiper-slide-title">{{ slde.title }}</h4>
          <div class="container__swiper-slide-description">{{ slde.description }}</div>
        </div>
      </div>
      <div class="container__swiper-toolbar">
        <div class="container__swiper-toolbar-buttons">
          <button
            :class="{ 'container__swiper-toolbar-buttons-button_disabled': isFirstSlide }"
            class="container__swiper-toolbar-buttons-button container__swiper-toolbar-buttons-button_prev"
          ></button>
          <button
            :class="{ 'container__swiper-toolbar-buttons-button_disabled': isLastSlide }"
            class="container__swiper-toolbar-buttons-button container__swiper-toolbar-buttons-button_next"
          ></button>
        </div>
        <div class="swiper-pagination"></div>
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
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          // bulletClass: 'swiper-pagination-bullet',
          // bulletActiveClass: 'swiper-pagination-bullet-active',
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
            spaceBetween: 15
          }
        },
        navigation: {
          nextEl: '.container__swiper-toolbar-buttons-button_next',
          prevEl: '.container__swiper-toolbar-buttons-button_prev'
        }
      }
    }
  },
  methods: {
    handleSlideChange() {
      this.isFirstSlide = this.$refs.swiper.swiper.isBeginning
      this.isLastSlide = this.$refs.swiper.swiper.isEnd
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .container__swiper {
    width: 100%;
  }
  .container__swiper-slide {
    box-shadow: 0 10px 30px 0 rgba(8, 61, 119, 0.25);
    background-color: $twilight-blue;
    .container__swiper-slide-title {
      @include font-style(#fff, 21px, OpenSans, -0.53px);
      color: #fff;
      font-weight: bold;
      line-height: 1.19;
    }
    .container__swiper-slide-description {
      margin: 24px 0 0 0;
      @include font-style(#fff, 15px, OpenSans, -0.38px);
      color: #fff;
    }
  }
}
.container__swiper-toolbar {
  display: flex;
  position: relative;
}
.container__swiper-toolbar-buttons {
  display: flex;
}
.container__swiper-toolbar-buttons-button {
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
.container__swiper-toolbar-buttons-button_prev {
  rotate: 180deg;
}
.container__swiper-toolbar-buttons-button_next {
}
.container__swiper-toolbar-buttons-button_disabled {
  opacity: 0.25;
}
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  opacity: 0.2;
  border-radius: 100%;
  background-color: $charcoal;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
.swiper-pagination {
  transform: translate(50%, 50%);
  left: 50%;
  top: 50%;
}

// Small devices
@media (max-width: 639px) {
  .container__swiper-slide {
    transform: translate(0, 0);
    width: 100%;
    height: 375px;
    padding: 92px 30px;
    .container__swiper-slide-title {
      line-height: 1;
    }
  }
  .container__swiper-toolbar-buttons {
    transform: translate(0, 0);
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container__swiper-slide {
    transform: translate(-37%, 0);
    width: 375px;
    height: 368px;
    padding: 87px 15px;
  }
  .container__swiper-toolbar-buttons {
    width: 375px;
  }
  .container__swiper-toolbar-buttons {
    transform: translate(-37%, 0);
  }
}

//Large devices
@media (min-width: 1024px) {
  .container__swiper-slide {
    transform: translate(-64%, 0);
    width: 420px;
    height: 368px;
    padding: 67px 37px;
    .container__swiper-slide-title {
      @include font-style(#fff, 21px, OpenSans, -0.53px);
      color: #fff;
    }
    .container__swiper-slide-description {
      margin: 22px 0 0 0;
      @include font-style(#fff, 17px, OpenSans, -0.43px);
    }
  }
  .container__swiper-toolbar-buttons {
    transform: translate(113%, 0);
  }
}
</style>
