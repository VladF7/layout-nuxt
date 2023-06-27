<template>
  <header class="container">
    <div class="container__logo">
      <div class="container__logo-image"></div>
    </div>

    <nav class="container__menu">
      <ul class="container__menu-items">
        <li><a class="container__menu-item" href="#benefits">Benefits</a></li>
        <li><a class="container__menu-item" href="#advantages">Advantages</a></li>
        <li><a class="container__menu-item" href="#achiements">Achievements</a></li>
      </ul>
    </nav>

    <div class="container__language-switcher">
      <LanguageSwitcher />
    </div>

    <nav class="container__burger-menu">
      <BurgerMenu />
    </nav>
  </header>
</template>
<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import BurgerMenu from './BurgerMenu.vue'

export default {
  name: 'Header',
  components: { LanguageSwitcher, BurgerMenu }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  position: relative;
  z-index: 100;
  height: $headerSize;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.75);
}
.container__logo {
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
}
.container__logo-image {
  width: 204px;
  height: 64px;
  background-image: url('../static/full-logo.svg');
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
}
.container__menu {
  display: flex;
  width: 60%;
  justify-content: center;
  box-sizing: border-box;
}
.container__language-switcher {
  margin: 0;
  display: flex;
  justify-content: flex-end;
  width: 20%;
  box-sizing: border-box;
}
.container__burger-menu {
  display: none;
}
.container__menu-items {
  margin: 0;
  display: flex;
  li:last-child {
    padding-left: 20px;
  }
  .container__menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23px;
    @include font-style($black, 17px, OpenSans-Semibold, 0.13px);
    &:hover {
      color: $pale-orange;
    }
  }
}

// Small devices
@media (max-width: 639px) {
  .container {
    padding: 0 35px 0 37px;
  }
  .container__logo {
    width: 90%;
  }
  .container__burger-menu {
    display: block;
  }
  .container__menu-items {
    display: none;
  }
  .container__language-switcher {
    display: none;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    padding: 0 21px 0 53px;
  }
  .container__logo {
    width: 15%;
  }
  .container__logo-image {
    width: 64px;
    height: 64px;
    background-image: url('../static/small-logo.svg');
  }
  .container__menu-item {
    width: 120px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .container {
    padding: 0 221px 0 53px;
  }
  .container__logo {
    width: 30%;
  }
  .container__menu-item {
    width: 144px;
  }
}
</style>
