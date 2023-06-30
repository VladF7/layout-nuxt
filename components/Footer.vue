<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__content-text">Data Protection / Imprint</div>
      <div class="footer__content-logo">
        <img class="footer__content-logo-image" src="../static/full-logo-footer.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  height: 104px;
}
.footer__content {
  display: flex;
  align-items: center;
}
.footer__content-text {
  @include font-style(#fff, 15px, OpenSans, 0.12px);
  color: #fff;
}
.footer__content-logo {
  height: 24px;
}
.footer__content-logo-image {
  height: 100%;
}

// Small devices
@media (max-width: 639px) {
  .footer {
    height: 208px;
  }
  .footer__content {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__content-logo {
    margin-top: 36px;
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .footer {
    padding-left: 92px;
    padding-right: 45px;
  }
  .footer__content {
    justify-content: space-between;
    width: 100%;
  }
}

//Large devices
@media (min-width: 1024px) {
  .footer {
    padding: 40px 0;
  }
  .footer__content {
    justify-content: space-around;
    width: 100%;
  }
}
</style>
