<template>
  <div class="wrapper">
    <main-layout>
      <LogisticManagement />
      <HaveYouExperienced />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '../layout/MainLayout.vue'
import LogisticManagement from '../components/LogisticManagement.vue'
import HaveYouExperienced from '../components/HaveYouExperienced.vue'

export default { components: { MainLayout, LogisticManagement, HaveYouExperienced } }
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}
</style>
