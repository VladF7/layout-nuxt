<template>
  <div v-show="isOpenModalWindow" class="container">
    <div class="container__modal">
      <div class="container__modal-wrapper">
        <button class="container__modal-close-button" @click="closeModal"></button>
        <div class="container__modal-description">
          <div class="container___modal-description-title">
            <h2>LET’S DISCUSS</h2>
            <h2>YOUR BUSINESS CASE!</h2>
          </div>
          <div class="container___modal-description-text">
            Everything is possible!
            <span class="container___modal-description-text_hidden">
              We will analyze your existing situation, discover the bottlenecks and offer a solution
              that exactly matches your business case!
            </span>
          </div>
        </div>
        <form class="container__modal-form" @submit="submit">
          <div class="container__modal-form-input-name-last-name-wrapper">
            <div class="container__modal-form-input-wrapper">
              <label class="container__modal-form-input-label"> Name</label>
              <input
                class="container__modal-form-input-item container__modal-form-input-item_common-styles"
                v-model="name"
                placeholder="Klaus"
              />
            </div>
            <div class="container__modal-form-input-wrapper">
              <label class="container__modal-form-input-label"> Last Name</label>
              <input
                class="container__modal-form-input-item container__modal-form-input-item_common-styles"
                v-model="lastName"
                placeholder="Voormann"
              />
            </div>
          </div>
          <div class="container__modal-form-input-wrapper">
            <label class="container__modal-form-input-label"> E-Mail</label>
            <input
              class="container__modal-form-input-item_common-styles container__modal-form-input-item_full-width"
              v-model="email"
              placeholder="klaus.voormann@email.de"
            />
          </div>
          <div class="container__modal-form-input-wrapper">
            <label class="container__modal-form-input-label">
              Some brief description or comments</label
            >
            <textarea
              class="container__modal-form-input-item_common-styles container__modal-form-input-item_text-area"
              v-model="comment"
              placeholder="My business case is completely different, so I want to discuss it with you."
            >
            </textarea>
          </div>
          <div class="container__modal-form-data-policy">
            By pressing the “request a consultation” button you agree with
            <a
              href="#"
              class="container__modal-form-data-policy container__modal-form-data-policy_link"
              >data protection</a
            >
            policy
          </div>
          <div class="container__modal-form-submit-button-wrapper">
            <button
              :class="{ 'container__modal-form-submit-button_success': isButtonClicked }"
              class="container__modal-form-submit-button"
            >
              {{ buttonText }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Modal',
  components: { Button },
  data() {
    return {
      isMobile: false,
      isButtonClicked: false,
      buttonText: 'Request a Consultation',
      name: '',
      lastName: '',
      email: '',
      comment: ''
    }
  },
  computed: {
    isOpenModalWindow() {
      return this.$store.state.isOpenModalWindow
    }
  },
  methods: {
    closeModal() {
      this.isButtonClicked = false
      this.buttonText = 'Request a Consultation'
      this.name = ''
      this.lastName = ''
      this.email = ''
      this.comment = ''
      this.$store.commit('closeModal')
    },
    submit(e) {
      e.preventDefault()
      this.isButtonClicked = true
      this.buttonText = 'Your request was successfully sent'
      console.log({
        formName: this.name,
        formLastName: this.lastName,
        formEmail: this.email,
        formComment: this.comment
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 30px 15px 29px 15px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.container__modal {
  width: 633px;
  height: 100%;
  max-height: 755px;
  padding: 52px 52px 29px 52px;
  box-shadow: 0 10px 30px 0 rgba(30, 30, 30, 0.25);
  background-image: linear-gradient(140deg, #fff, $white 100%);
  position: relative;
}
.container__modal-close-button {
  position: absolute;
  right: 0;
  top: 0;
  width: 44px;
  height: 44px;
  border-radius: 0 0 0px 22px;
  background-image: url('../static/close-form-button.svg');
}
.container__modal-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.container___modal-description-title {
  max-width: 345px;
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1.2;
}
.container___modal-description-text {
  margin-top: 20px;
  @include font-style($black, 15px, OpenSans, -0.38px);
  opacity: 0.75;
}
.container___modal-description-text_hidden {
  display: inline;
}
.container__modal-form {
  margin-top: 25px;
  padding-left: 12px;
  padding-right: 13px;
}

.container__modal-form-input-name-last-name-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.container__modal-form-input-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.container__modal-form-input-label {
  padding-left: 24px;
  @include font-style($black, 13px, OpenSans, -0.33px);
  display: flex;
  align-items: center;
  height: 24px;
}
.container__modal-form-input-item_common-styles {
  @include font-style($black, 17px, OpenSans, -0.43px);
  border-radius: 22px;
  border: solid 1px rgba(30, 30, 30, 0.25);
  // opacity: 0.25;
  height: 44px;
  padding: 10px 22px 10px 24px;
  &:focus {
    border: solid 1px rgba(30, 30, 30, 1);
  }
}
.container__modal-form-input-item {
  width: 240px;
}
.container__modal-form-input-item_full-width {
  width: 100%;
}
.container__modal-form-input-item_text-area {
  width: 100%;
  height: 132px;
  padding: 13px 36px 13px 24px;
  overflow-y: auto;
  resize: none;
}

.container__modal-form-data-policy {
  margin-top: 25px;
  max-width: 345px;
  @include font-style($black, 15px, OpenSans, -0.38px);
  opacity: 0.75;
}
.container__modal-form-data-policy_link {
  font-weight: 600;
  text-decoration: underline;
}

.container__modal-form-submit-button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}
.container__modal-form-submit-button {
  @include font-style(#fff, 17px, OpenSans, -0.43px);
  font-weight: bold;
  color: #fff;
  width: 240px;
  height: 44px;
  border-radius: 22px;
  background-color: $twilight-blue;
}
.container__modal-form-submit-button_success {
  width: 345px;
  color: $black;
  border: solid 1px #2b8f2b;
  background-color: transparent;
}

// Small devices
@media (max-width: 639px) {
  .container__modal {
    width: 100%;
    padding: 44px 0px 38px 0px;
  }
  .container___modal-description-title {
    max-width: 100%;
    padding-left: 25px;
    @include font-style($black, 21px, Catamaran, -0.63px);
    line-height: 1;
  }
  .container___modal-description-text {
    margin-top: 14px;
    padding-left: 25px;
    @include font-style($black, 13px, OpenSans, -0.33px);
  }
  .container___modal-description-text_hidden {
    display: none;
  }
  .container__modal-form {
    margin-top: 0;
    padding-left: 25px;
    padding-right: 25px;
  }

  .container__modal-form-input-name-last-name-wrapper {
    flex-direction: column;
  }
  .container__modal-form-input-wrapper {
    margin-top: 20px;
  }
  .container__modal-form-input-item {
    width: 100%;
  }
  .container__modal-form-data-policy {
    width: 100%;
  }
  .container__modal-form-submit-button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    position: relative;
  }
  .container__modal-form-submit-button {
    width: 100%;
  }
  .container__modal-form-submit-button_success {
    position: absolute;
    width: calc(100% + 30px);
    z-index: 10;
  }
}
</style>
