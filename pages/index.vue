<template>
  <div class="wrapper">
    <main-layout>
      <LogisticManagement />
      <HaveYouExperienced />
      <Benefits />
      <Advantages />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '../layout/MainLayout.vue'
import LogisticManagement from '../components/LogisticManagement.vue'
import HaveYouExperienced from '../components/HaveYouExperienced.vue'
import Benefits from '../components/Benefits.vue'
import Advantages from '../components/Advantages.vue'

export default {
  components: { MainLayout, LogisticManagement, HaveYouExperienced, Benefits, Advantages }
}
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}
</style>
