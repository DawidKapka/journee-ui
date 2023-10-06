<template>
  <input type="text" v-model="searchStore.searchValue" class="input" placeholder="Search..." @input="input()">
</template>
<script setup lang="ts">

import {defineProps, onMounted} from "vue";
import {useSearchStore} from "../store/SearchStore";

const emit = defineEmits(['update:modelValue', 'input'])
const props = defineProps<{
  modelValue: string
}>()
const searchStore = useSearchStore()

onMounted(() => {

  if (props.modelValue) {
    searchStore.searchValue = props.modelValue
  }
})

const input = () => {
  emit('update:modelValue', searchStore.searchValue)
  emit('input', searchStore.searchValue)
}

</script>
<style lang="scss" scoped>
@import '../style/misc.scss';
@import '../style/colors.scss';

.input {
  width: calc(100% - 2em);
  height: 2em;
  padding: 1em;
  font-size: 1em;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: $border-default;
  box-shadow: none;

  &:focus {
    outline: none;
  }
}
</style>
