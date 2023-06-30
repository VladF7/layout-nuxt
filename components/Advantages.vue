<template>
  <section id="advantages" class="container">
    <div class="container__advantages">
      <div class="container__advantages-wrapper">
        <h2 class="container__advantages-title">OUR ADVANTAGES</h2>
        <ul class="container__advantages-items">
          <li class="container__advantages-item" v-for="(item, index) in items" :key="index">
            <div class="container__advantages-item-wrapper">
              <div class="container__advantages-item-dot"></div>
              <div class="container__advantages-item-text">
                <div class="container__advantages-item-text-show-icon" @click="toggleItem(index)">
                  <img
                    class="container__advantages-item-text-show-icon-image"
                    :class="{
                      'container__advantages-item-text-show-icon-image_closed':
                        activeIndexes.includes(index)
                    }"
                    src="./../static/pin-left.svg"
                  />
                </div>
                <h4 class="container__advantages-item-title" @click="toggleItem(index)">
                  {{ item.title }}
                </h4>
                <div
                  class="container__advantages-item-description"
                  :class="{
                    'container__advantages-item-description-show': activeIndexes.includes(index)
                  }"
                >
                  {{ item.description }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container__rewievs">
      <ul class="container__rewievs-items">
        <li class="container__rewievs-item" v-for="(item, index) in rewievs" :key="index">
          <div class="container__rewievs-item-wrapper">
            <div class="container__rewievs-item-rewiev">
              {{ item.rewiev }}
            </div>
            <div class="container__rewievs-item-user">
              <div class="container__rewievs-item-user-info">
                <h5 class="container__rewievs-item-user-info-name">{{ item.name }}</h5>
                <div class="container__rewievs-item-user-info-position">
                  {{ item.position }}
                </div>
              </div>
              <div class="container__rewievs-item-user-photo">
                <img
                  class="container__rewievs-item-user-photo-image"
                  :src="require(`~/static/${item.photo}`)"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advantages',
  methods: {
    toggleItem(index) {
      if (this.activeIndexes.includes(index)) {
        this.activeIndexes = this.activeIndexes.filter((i) => i !== index)
      } else {
        this.activeIndexes.push(index)
      }
    }
  },
  data() {
    return {
      activeIndexes: [],
      rewievs: [
        {
          rewiev: `Flawless communication with the Clockwise Software team resulted in a fleet management system that exactly met the needs of the municipal waste transportation company. The software runs on Android smartphones, so there was no need for expensive equipment, and the learning curve was low. We’ve implemented multi-tenancy to use this software in other projects connected with logistics.`,
          name: `Dan Weber`,
          position: `CEO/CTO at Marketsoup`,
          photo: 'rewiever-photo-2.png'
        },
        {
          rewiev: `With the automatic load scheduling and proper route planning, we are finally able to use 100% of our truck load capacity. Also, order management and delivery have become much more efficient due to custom modules. In the first year, we have covered our investment in custom ERP system development`,
          name: `Vadim Chabanenko`,
          position: `Director at UDK Gazbeton`,
          photo: 'rewiever-photo-1.png'
        }
      ],
      items: [
        {
          title: `System Integration`,
          description: `We help you with educating employees and integrating software in your running processes`
        },
        {
          title: `Technical support`,
          description: `We guarantee support and product maintenance after release and keep improving the system in cooperation with your team`
        },
        {
          title: `Data security`,
          description: `Your data is stored on secure servers based in Germany (or any other country on your request)`
        },
        {
          title: `We speak your language`,
          description: `Our managers are German- and English-speaking, so the business communication is clear and easy`
        },
        {
          title: `Representative in Germany`,
          description: `Our business analyst is based in Frankfurt am Main. Discussing all the business issues in person is much more efficient`
        },
        {
          title: `5 years experience in logistics`,
          description: `We’ve successfully implemented custom logistics/transportation/stock and order management systems`
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
.container__advantages {
  display: flex;
  flex-direction: column;
}
.container__rewievs {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(140deg, #fff, $white);
}
.container__advantages-title {
  @include font-style($black, 25px, Catamaran, -0.63px);
  line-height: 1;
}
.container__advantages-item {
  margin-top: 26px;
  &:nth-child(1) {
    margin-top: 0;
  }
}
.container__advantages-item-wrapper {
  display: flex;
  position: relative;
}
.container__advantages-item-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: $watermelon;
  margin-right: 43px;
}
.container__advantages-item-text-show-icon-image {
  display: none;
}
.container__advantages-item-title {
  @include font-style($black, 21px, Catamaran, -0.53px);
}
.container__advantages-item-description {
  width: 345px;
  opacity: 0.75;
  @include font-style($black, 15px, OpenSans, -0.38px);
}

.container__rewievs-item {
  margin-top: 71px;
  &:nth-child(1) {
    margin-top: 0;
  }
}
.container__rewievs-item-rewiev {
  @include font-style($black, 17px, OpenSans-Semibold, -0.42px);
}
.container__rewievs-item-user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
}
.container__rewievs-item-user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
}
.container__rewievs-item-user-info-name {
  @include font-style($black, 17px, OpenSans, -0.43px);
  font-weight: bold;
}
.container__rewievs-item-user-info-position {
  @include font-style($black, 15px, OpenSans, -0.43px);
}
.container__rewievs-item-user-photo-image {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  filter: grayscale(100%);
}

// Small devices
@media (max-width: 639px) {
  .container {
    margin-top: 159px;
    flex-direction: column;
    padding: 0 15px;
  }
  .container__advantages-items {
    margin-top: 50px;
  }
  .container__advantages-item {
    padding: 11px 15px;
    margin: 0 -15px;
    border: solid 1px #f3f3f3;
    margin-top: 0;
  }
  .container__advantages-item-dot {
    display: none;
  }
  .container__advantages-item-text-show-icon-image {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 25px;
    top: 5px;
    width: 24px;
    height: 24px;
    rotate: 0deg;
    transition: rotate 0.3s ease-out;
  }
  .container__advantages-item-text-show-icon-image_closed {
    position: absolute;
    rotate: 180deg;
    transition: rotate 0.3s ease-out;
  }
  .container__advantages-item-title {
    cursor: pointer;
    width: 100%;
  }
  .container__advantages-item-description {
    margin-top: 0px;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    transition: margin-bottom 0.3s ease-out, margin-top 0.3s ease-out, max-height ease-out;
  }
  .container__advantages-item-description-show {
    margin-top: 11px;
    margin-bottom: 16px;
    max-height: 100%;
    width: 100%;
    transition: margin-bottom 0.3s ease-out, margin-top 0.3s ease-out, max-height ease-out;
  }
  .container__rewievs {
    margin-top: 98px;
    padding: 25px;
  }
  .container__rewievs-item {
    margin-top: 50px;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
  .container__rewievs-item-rewiev {
    @include font-style($black, 15px, OpenSans-Semibold, -0.38px);
  }
}

// Medium devices
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    margin-top: 173px;
    flex-direction: column;
    padding-right: 66px;
  }
  .container__advantages {
    padding-left: 11px;
  }
  .container__advantages-items {
    margin-top: 49px;
  }
  .container__rewievs {
    margin-top: 96px;
    padding: 90px 110px;
  }
}

//Large devices
@media (min-width: 1024px) {
  .container {
    margin-top: 168px;
  }
  .container__advantages {
    width: 50%;
    align-items: flex-end;
    margin-right: 109px;
  }
  .container__advantages-title {
    @include font-style($black, 35px, Catamaran, -0.88px);
    line-height: 1;
  }
  .container__advantages-items {
    margin-top: 52px;
  }

  .container__rewievs {
    width: 50%;
    padding: 96px 40px 133px 40px;
  }
  .container__rewievs-item {
    max-width: 415px;
  }
}
</style>
