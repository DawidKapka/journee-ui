<template>
  <div class="searchbar">
    <input-component class="input" @input="search" v-model="searchStore.searchValue"></input-component>
    <div class="input-icon" v-if="searchStore.searchValue === ''" @click="search">
      <i class="pi pi-search"></i>
    </div>
    <div v-else class="input-icon" @click="clearInput">
      <i class="pi pi-times"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputComponent from '../InputComponent.vue'
import { useSearchStore } from "../../store/SearchStore";

const emit = defineEmits(['search'])
const searchStore = useSearchStore()

const search = (event) => {
  if (event) {
    emit('search', event)
  }
}

const clearInput = () => {
  searchStore.searchValue = ''
  emit('search', '')
}
</script>
<style lang="scss">
@import "../../style/colors";

.searchbar {
  display: flex;
  width: 100%;

  .input {
    width: 85%;
  }

  .input-icon {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    i {
      color: $color-white;
      font-size: 1.5em;
      margin-bottom: .25em;
      margin-right: 1em;
    }
  }
}
</style>
