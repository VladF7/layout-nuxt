<template>
  <div class="scroll-container">
    <div class="scroll-container__element-wrapper">
      <button class="scroll-container__element" @click="scrollToNextSection">
        <img
          class="scroll-container__element-icon scroll-container__element-icon_next"
          src="../static/scroll-down-arrow.svg"
        />
        <div class="scroll-container__element-content scroll-container__element-content_next">
          Scroll to next section
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollElement',
  props: {
    scrollElementText: {
      type: String,
      require: false
    },
    scrollToLink: {
      type: String,
      require: false
    }
  },
  methods: {
    scrollToNextSection() {
      const element = this.sections
        .map((item) => {
          const section = document.getElementById(item)
          const offset = section.offsetTop
          return {
            offset,
            section
          }
        })
        .filter(({ offset }) => offset > window.scrollY)
        .at(0)
      if (element) {
        element.section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  data() {
    return {
      sections: ['logistic', 'experience', 'benefits', 'advantages', 'achievements']
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  margin: 0;
  position: sticky;
  z-index: 9998;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-container__element-wrapper {
  display: flex;
  rotate: -90deg;
}
.scroll-container__element {
  margin: 0 20px;
  position: relative;
  z-index: 9999;
  cursor: pointer;
  @include font-style($black, 13px, OpenSans, 0.16px);
  opacity: 0.5;
  font-weight: 300;
  background: transparent;
  display: flex;
  flex-wrap: nowrap;
  &:hover {
    color: $red;
  }
}
.scroll-container__element_disabled {
  opacity: 0.25;
  cursor: default;
  &:hover {
    color: inherit;
  }
}

.scroll-container__element-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  opacity: 0.5;
  rotate: -90deg;
}
.scroll-container__element-icon_next {
  rotate: 90deg;
}
.scroll-container__element-content {
  white-space: nowrap;
}
.scroll-container__element-content_next {
  padding-left: 40px;
}
</style>
