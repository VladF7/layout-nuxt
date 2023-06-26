<template>
  <div class="wrapper">
    <main-layout>
      <LogisticManagement />
      <HaveYouExperienced />
      <Benefit />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '../layout/MainLayout.vue'
import LogisticManagement from '../components/LogisticManagement.vue'
import HaveYouExperienced from '../components/HaveYouExperienced.vue'
import Benefit from '../components/Benefit.vue'

export default { components: { MainLayout, LogisticManagement, HaveYouExperienced, Benefit } }
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}
</style>
