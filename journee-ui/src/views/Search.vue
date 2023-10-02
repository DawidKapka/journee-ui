<template>
  <ion-page>
    <header class="header">
      <div class="searchbar-container">
        <searchbar-component class="searchbar" @search="search"></searchbar-component>
      </div>
    </header>
  </ion-page>
</template>

<script setup lang="ts">
import SearchbarComponent from '../components/SearchbarComponent.vue'
import {ref} from "vue";

const searchResults = ref({} as SearchResults)

const search = (event) => {

}
</script>

<style lang="scss">
@import '../style/colors.scss';

.header {
  width: 100vw;
  height: 6em;
  background: $color-primary;
}

.searchbar-container {
  display: flex;
  align-items: center;
  height: 4em;
  padding-top: 2em;
}

.searchbar {
}
</style>
