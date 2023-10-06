<template>
  <ion-app>
    <router-view />
    <navbar></navbar>
  </ion-app>
</template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComponent.vue";
</script>

<style lang="scss">
@import 'style/colors.scss';
@import 'style/typography.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');


body {
  color: $color-black;
  overflow: hidden;
  margin: 0;
  background: $color-white;
  font-family: 'Roboto', sans-serif;
}

</style>
