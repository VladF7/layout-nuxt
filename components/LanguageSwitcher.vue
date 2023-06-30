<template>
  <ul class="language-switcher">
    <li>
      <a
        @click="toggleLanguague"
        class="language-switcher__item"
        :class="{ 'language-switcher__item_active': !isActive }"
        href="#"
        >DE</a
      >
    </li>
    <li>
      <a
        @click="toggleLanguague"
        class="language-switcher__item"
        :class="{ 'language-switcher__item_active': isActive }"
        href="#"
        >EN</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  name: 'LanguageSwitcher',
  methods: {
    toggleLanguague() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
.language-switcher {
  display: flex;
  margin: 0;
  .language-switcher__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 24px;
    opacity: 0.25;
    @include font-style($black, 17px, OpenSans, 0.13px);
  }
  .language-switcher__item_active {
    opacity: 1;
  }
}
</style>
