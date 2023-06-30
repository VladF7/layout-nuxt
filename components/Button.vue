<template>
  <button class="button-primary" @click="handleClick">
    {{ buttonText }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    handleClick() {
      this.$emit('handleClick')
    }
  },
  props: {
    buttonText: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.button-primary {
  position: relative;
  z-index: 3;
  @include font-style(#fff, 21px, Catamaran, -0.53px);
  color: #fff;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 72px;
  background-color: $twilight-blue;
  box-shadow: 0px 3px 3px 0px rgba(8, 61, 119, 0.5);
  &:hover {
    background-color: rgba(8, 61, 119, 0.9);
  }
}
</style>
