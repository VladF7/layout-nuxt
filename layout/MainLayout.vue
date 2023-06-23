<template>
  <div>
    <Header />
    <div :class="{ 'hide-content': isOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'MainLayout',
  components: { Header },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
.hide-content {
  display: block;
}
// Small devices
@media (max-width: 639px) {
  .hide-content {
    display: none;
  }
}
</style>
