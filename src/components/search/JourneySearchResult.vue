<template>
  <div class="journey-result">
    <div class="image">
      <img :src="journey.imageUrl" :alt="journey.title" v-if="journey.imageUrl" class="journey-img">
      <img src="../../assets/journey-default.jpg" :alt="journey.title" v-if="!journey.imageUrl" class="journey-img">
    </div>
    <div class="desc">
      <h3 class="title">{{journey.title}}</h3>
      <p class="by subtext">by @{{journey.userTag}}</p>
    </div>
    <div class="icon-container">
      <i class="pi pi-angle-double-right"></i>
    </div>
  </div>
</template>

<script setup lang="ts">

import {JourneyPreview} from "../../types/JourneyPreview";

defineProps<{
  journey: JourneyPreview
}>()

</script>

<style lang="scss" scoped>
@import '../../style/colors.scss';
@import '../../style/misc.scss';

.journey-result {
  width: calc(100% - 2em);
  height: 6em;
  margin: 1em;
  border: $border-default;
  border-radius: 1em;
  box-shadow: $shadow-default;
  display: flex;

  &:active {
    background: $color-white-active;
  }
}

.image {
  width: 35%;
}

.journey-img {
  height: 6em;
  width: 100%;
  object-fit: cover;
  border-radius: 1em 0 0 1em;
}

.desc {
  width: 45%;
  padding: .5em;
}

.title {
  margin: .5em 0 .5em .5em;
  width: 100%;
  height: 1em;
}

.by {
  margin: 0 0 0 .5em;
}

.icon-container {
  width: 20%;
  height: 6em;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
