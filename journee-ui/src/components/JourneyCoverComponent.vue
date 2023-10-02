<template>
  <div class="journey">
    <div class="title-wrapper">
      <h4 class="title">{{ title }}</h4>
      <i class="pi pi-angle-double-right"></i>
    </div>
    <img v-if="imageUrl" :src="imageUrl" alt="Journey Image" class="journey-img">
    <img v-else src="../assets/journey-default.jpg" class="journey-img">
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string,
  imageUrl?: string
}>()

</script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.journey {
  height: 10em;
  border-radius: .5em;
  border: $border-default;
  box-shadow: $shadow-default;
  padding-top: 1em;
  width: 100%;
  overflow: hidden;
}

.title-wrapper {
  width: 100%;
  display: flex;
}

.title {
  height: 2em;
  margin-left: 1em;
  width: 85%;
}

.journey-img {
  width: 100%;
  height: 8em;
  object-fit: cover;
  border-radius: 0 0 .2em .2em;
}

</style>
