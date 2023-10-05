<template>
  <input type="text" v-model="text" class="input" placeholder="Search..." @input="input()">
</template>
<script setup lang="ts">

import {defineProps, onMounted, ref} from "vue";

const emit = defineEmits(['input'])
const props = defineProps<{
  value: string
}>()

onMounted(() => {
  if (props.value) {
    text.value = props.value
  }
})

let text = ref('')

const input = () => {
  emit('input', text.value)
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
