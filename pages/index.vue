<template>
  <div>
    <MainLayout>
      <div class="wrapper">
        <div class="wrapper__scroll-element">
          <ScrollElement />
        </div>
        <div class="wrapper__layout">
          <LogisticManagement />
          <HaveYouExperienced />
          <Benefits />
          <Advantages />
          <Achievements />
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../layout/MainLayout.vue'
import LogisticManagement from '../components/LogisticManagement.vue'
import HaveYouExperienced from '../components/HaveYouExperienced.vue'
import Benefits from '../components/Benefits.vue'
import Advantages from '../components/Advantages.vue'
import Achievements from '../components/Achievements.vue'
import ScrollElement from '../components/ScrollElement.vue'

export default {
  components: {
    MainLayout,
    LogisticManagement,
    HaveYouExperienced,
    Benefits,
    Advantages,
    Achievements,
    ScrollElement
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  background-image: linear-gradient(166deg, #fff, #f8f8f8);
}
.wrapper__scroll-element {
  width: 10%;
}
.wrapper__layout {
  flex: 1;
}

@media (max-width: 639px) {
  .wrapper__scroll-element {
    display: none;
  }
  .wrapper__layout {
    width: 100%;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .wrapper__scroll-element {
    max-width: 66px;
  }
  .wrapper__layout {
    width: calc(100% - 10%);
  }
}

//Large devices
@media (min-width: 1024px) {
  .wrapper__scroll-element {
    max-width: 157px;
  }
  .wrapper__layout {
    width: calc(100% - 10%);
  }
}
</style>
