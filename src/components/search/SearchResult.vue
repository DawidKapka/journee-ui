<template>
  <div class="search-result">
    <user-search-result v-if="type === ResultType.USER" :user="result"></user-search-result>
    <journey-search-result v-if="type === ResultType.JOURNEY" :journey="result"></journey-search-result>
  </div>
</template>

<script setup lang="ts">

import {UserInfo} from "../../types/User";
import {JourneyPreview} from "../../types/JourneyPreview";
import {ResultType} from "../../types/Search";
import UserSearchResult from './UserSearchResult.vue'
import JourneySearchResult from './JourneySearchResult.vue'

defineProps<{
  type: ResultType,
  result: UserInfo | JourneyPreview
}>()
</script>

<style lang="scss" scoped></style>
