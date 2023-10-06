<template>
  <button class="button" :class="{
    'primary': theme === 'primary',
    'inverted': theme === 'inverted',
    'plain': theme === 'plain',
    'danger': theme === 'danger',
    'success': theme === 'success'
  }" @click="click()">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

import {ButtonTheme} from "@/types/Button";

defineProps<{
  theme: ButtonTheme
}>()

const emit = defineEmits(['click'])

const click = () => emit('click')
</script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.button {
  padding: .5em 1em .5em 1em;
  border-radius: 4px;
  border: none;
  box-shadow: $shadow-default;
  letter-spacing: .06em;
  font-weight: bold;
  min-height: 2em;
  min-width: 2em;
}

.primary {
  background: $color-primary;

  &:active {
    background: $color-primary-active;
  }
}

.inverted {
  background: $color-white;
  color: $color-black;

  &:active {
    background: $color-white-active;
  }
}

.plain {
  background: transparent;
  color: $color-black;
  border-bottom: 2px solid $color-black;
  border-radius: 0 !important;

  &:active {
    color: black-opacity(.5);
    border-bottom: 2px solid black-opacity(.5);
  }
}

.danger {
  background: $color-warning;
}

.success {
  background: $color-success;
}

</style>
