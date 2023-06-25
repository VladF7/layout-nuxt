<template>
  <div class="burger-menu">
    <button
      class="burger-menu__button"
      :class="{ 'burger-menu__button_opened': isOpen }"
      type="button"
      @click="toggleMenu"
    ></button>

    <div v-show="isOpen" class="burger-menu__overlay">
      <nav class="burger-menu__overlay-menu">
        <ul>
          <li><a class="burger-menu__overlay-menu-item" href="#">Benefits</a></li>
          <li><a class="burger-menu__overlay-menu-item" href="#">Advantages</a></li>
          <li><a class="burger-menu__overlay-menu-item" href="#">Achievements</a></li>
        </ul>
      </nav>

      <div class="burger-menu__overlay-language-switcher">
        <span class="burger-menu__overlay-language-switcher-text"> Language </span>
        <LanguageSwitcher />
      </div>

      <div class="burger-menu__overlay-button">
        <Button buttonText="Request a free consultation" @handleClick="toggleMenu" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'BurgerMenu',
  components: { Button, LanguageSwitcher },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.burger-menu__button {
  background-color: transparent;
  width: 24px;
  height: 24px;
  object-fit: contain;
  background-image: url('../static/burger-menu-open.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.burger-menu__button_opened {
  background-image: url('../static/burger-menu-close.svg');
}
.burger-menu__overlay {
  background-color: #fff;
  position: fixed;
  z-index: 10;
  top: $headerSize;
  right: 0;
  bottom: 0;
  left: 0;
  height: calc(100% - $headerSize);
  min-height: max-content;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.burger-menu__overlay-menu-item {
  display: block;

  @include font-style($black, 21px, Catamaran, -0.53px);

  padding: 11px 39px 11px 40px;
  object-fit: contain;
  border: solid 1px #f3f3f3;
}
.burger-menu__overlay-language-switcher {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin: 50px 0;
  padding: 6px 35px 6px 40px;
  object-fit: contain;
  border: solid 1px #f3f3f3;
}
.burger-menu__overlay-language-switcher-text {
  @include font-style($black, 21px, Catamaran, -0.53px);
}
.burger-menu__overlay-button {
  height: 44px;
  padding: 0 15px;
  margin-bottom: 55px;
}
</style>
