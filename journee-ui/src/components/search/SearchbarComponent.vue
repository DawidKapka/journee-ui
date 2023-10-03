<template>
  <div class="searchbar">
    <input-component class="input" @input="search"></input-component>
    <div class="search-icon">
      <i class="pi pi-search"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputComponent from '../InputComponent.vue'

const emit = defineEmits(['search'])

const search = (event) => {
  console.log(1);
  if (event && event.trim()) {
    emit('search', event)
  }
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

  .search-icon {
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
