<template>
  <div>
    <Modal />
    <div :class="{ 'disable-scroll': isOpenModalWindow }">
      <Header />
      <div :class="{ 'hide-content': isOpenBurgerMenu }">
        <slot></slot>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'MainLayout',
  components: { Header, Footer, Modal },
  computed: {
    isOpenBurgerMenu() {
      return this.$store.state.isOpenBurgerMenu
    },
    isOpenModalWindow() {
      return this.$store.state.isOpenModalWindow
    }
  }
}
</script>
<style lang="scss" scoped>
.hide-content {
  display: block;
}
.disable-scroll {
  height: 100vh;
  overflow-y: hidden;
}

// Small devices
@media (max-width: 639px) {
  .hide-content {
    display: none;
  }
}
</style>
