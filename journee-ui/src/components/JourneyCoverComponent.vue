<template>
  <div class="journey"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.journey {
  height: 8em;
  border-radius: .5em;
  box-shadow: $shadow-default;
  width: 100%;
  background-image: url('../assets/journey-default.jpg');
  background-size: cover;
}

</style>
