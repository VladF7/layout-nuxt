<template>
  <div class="scroll-container">
    <a class="scroll-container__element" :href="scrollToLink">
      <img class="scroll-container__element-icon" src="../static/scroll-down-arrow.svg" />
      <div class="scroll-container__element-content">{{ scrollElementText }}</div>
    </a>
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
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.scroll-container__element {
  @include font-style($black, 13px, OpenSans, 0.16px);
  opacity: 0.5;
  font-weight: 300;
  display: flex;
  flex-wrap: nowrap;
  rotate: -90deg;
  &:hover {
    color: $pale-orange;
  }
}
.scroll-container__element-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  opacity: 0.5;
  rotate: 90deg;
}
.scroll-container__element-content {
  padding-left: 40px;
  width: 100%;
  white-space: nowrap;
}
</style>
