<template>
  <ion-page>
    <div class="header">
      <div class="title-container">
        <h2 class="title text-light">Journee</h2>
      </div>
    </div>
    <div class="switch">
      <div class="switch-options">
        <div class="fyp" :class="{'active': activeTab === Tab.FYP}" @click="showFyp">
          <p class="switch-title">For you</p>
        </div>
        <div class="popular" :class="{'active': activeTab === Tab.POPULAR}" @click="showPopular">
          <p class="switch-title">Popular</p>
        </div>
      </div>
    </div>
    <div class="content">
      <fyp-component v-if="activeTab === Tab.FYP"></fyp-component>
      <popular-component v-if="activeTab === Tab.POPULAR"></popular-component>
    </div>
  </ion-page>
</template>

<script setup lang="ts">

import {ref, Ref} from "vue";
import FypComponent from '../components/feed/FypComponent.vue'
import PopularComponent from '../components/feed/PopularComponent.vue'

enum Tab { FYP, POPULAR }

let activeTab: Ref<Tab> = ref(Tab.FYP);

const showFyp = () => activeTab.value = Tab.FYP;

const showPopular = () => activeTab.value = Tab.POPULAR


</script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.header {
  width: 100vw;
  height: 6em;
  background: $color-primary;

  .title-container {
    height: 6em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      width: 100vw;
      text-align: center;
      line-height: 1em;
      height: 1em;
      margin: 0;
    }
  }
}

.switch {
  display: flex;
  justify-content: space-around;

  .switch-options {
    display: flex;
    margin-top: 1em;

    .active {
      background: $color-primary;
      color: $color-white;
      box-shadow: $shadow-default;
    }

    .fyp, .popular {
      border: $border-default;
    }

    .fyp {
      border-radius: 2em 0 0 2em;
      padding: .25em 1em .25em 1em;
    }

    .popular {
      border-radius: 0 2em 2em 0;
      border-left: none;
      padding: .25em 1em .25em 1em;
    }
  }
}
</style>
