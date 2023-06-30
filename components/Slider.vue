<template>
  <div class="slider-container">
    <div
      ref="swiper"
      class="slider-container__swiper swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @slideChange="handleSlideChange"
    >
      <div class="slider-container__swiper-toolbar">
        <div class="slider-container__swiper-toolbar-buttons">
          <button
            :class="{ 'slider-container__swiper-toolbar-buttons-button_disabled': isFirstSlide }"
            class="slider-container__swiper-toolbar-buttons-button slider-container__swiper-toolbar-buttons-button_prev"
          ></button>
          <div class="slider-container__swiper-toolbar-buttons-swiper-pagination"></div>
          <button
            :class="{ 'slider-container__swiper-toolbar-buttons-button_disabled': isLastSlide }"
            class="slider-container__swiper-toolbar-buttons-button slider-container__swiper-toolbar-buttons-button_next"
          ></button>
        </div>
      </div>
      <div class="slider-container__swiper-wrapper swiper-wrapper">
        <div
          class="slider-container__swiper-slide swiper-slide"
          v-for="(slde, index) in slides"
          :key="index"
        >
          <div class="slider-container__swiper-slide-image-wrapper">
            <img
              class="slider-container__swiper-slide-image-wrapper-image"
              :src="require(`~/static/slides/${slde.image}`)"
            />
          </div>
          <h4 class="slider-container__swiper-slide-title">{{ slde.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider-nuxt',
  data() {
    return {
      isFirstSlide: true,
      isLastSlide: false,
      slides: [
        {
          title: `Double truck day load capacity increase`,
          image: `DOUBLE TRUCK LOAD.png`
        },
        {
          title: `Case 3 Fleet `,
          image: `Case 3 Fleet.png`
        },
        {
          title: `Warehouse`,
          image: `WAREHOUSE.png`
        }
      ],
      swiperOptions: {
        loop: false,
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
          el: '.slider-container__swiper-toolbar-buttons-swiper-pagination',
          bulletClass: 'slider-container__swiper-toolbar-buttons-swiper-pagination-bullet',
          bulletActiveClass:
            'slider-container__swiper-toolbar-buttons-swiper-paginationn-bullet-active',
          clickable: true
        },
        navigation: {
          nextEl: '.slider-container__swiper-toolbar-buttons-button_next',
          prevEl: '.slider-container__swiper-toolbar-buttons-button_prev'
        }
      }
    }
  },
  methods: {
    handleSlideChange() {
      this.isFirstSlide = this.$refs.swiper.swiper.isBeginning
      this.isLastSlide = this.$refs.swiper.swiper.isEnd
    }
  }
}
</script>

<style lang="scss">
.slider-container {
  width: 469px;
}
.slider-container__swiper-toolbar {
  display: flex;
  position: relative;
  justify-content: flex-end;
}
.slider-container__swiper-toolbar-buttons {
  display: flex;
  justify-content: space-between;
  width: 320px;
  position: relative;
}
.slider-container__swiper-toolbar-buttons-swiper-pagination {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  display: flex;
}
.slider-container__swiper-toolbar-buttons-swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  margin: 8px;
  opacity: 0.2;
  border-radius: 100%;
  background-color: $charcoal;
}
.slider-container__swiper-toolbar-buttons-swiper-paginationn-bullet-active {
  opacity: 1;
}
.slider-container__swiper-toolbar-buttons-button_disabled {
  opacity: 0.25;
}
.slider-container__swiper-toolbar-buttons-button {
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
.slider-container__swiper-toolbar-buttons-button_prev {
  rotate: 180deg;
}
.slider-container__swiper-wrapper {
  width: 100%;
  height: 100%;
}
.slider-container__swiper-slide {
  width: 100%;
  height: 100%;
}
.slider-container__swiper-slide-image-wrapper {
  width: 100%;
  height: 100%;
}
.slider-container__swiper-slide-image-wrapper-image {
  height: 498px;
  width: 100%;
  object-fit: cover;
}
.slider-container__swiper-slide-title {
  @include font-style($black, 15px, OpenSans, -1px);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

// Small devices
@media (max-width: 639px) {
  .slider-container {
    width: 100%;
  }
  .slider-container__swiper-slide-image-wrapper-image {
    height: 100%;
  }
  .slider-container__swiper-toolbar-buttons {
    width: 100%;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .slider-container {
    width: 345px;
  }
  .slider-container__swiper-slide-image-wrapper-image {
    height: 366px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .slider-container {
    width: 469px;
  }
  .slider-container__swiper-slide-image-wrapper-image {
    height: 498px;
  }
}
</style>
