<template>
  <ion-page>
    <header class="header">
      <div class="searchbar-container">
        <searchbar-component class="searchbar" @search="search"></searchbar-component>
      </div>
    </header>
    <div class="results">
      <loading-component v-if="loading"></loading-component>
      <div class="search-results" v-if="!loading && (searchStore.searchResults.journeys || searchStore.searchResults.users)">
        <div class="filters">
          <div class="user-results" :class="{'active': usersShown}" @click="toggleUsers">
            <p>users</p>
          </div>
          <div class="journey-results" :class="{'active': journeysShown}" @click="toggleJourneys">
            <p>journeys</p>
          </div>
        </div>
        <div class="result-items">
          <div class="result-item" v-for="item of getResultItems()">
            <search-result :result="item.result" :type="item.type"></search-result>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import SearchbarComponent from '../components/search/SearchbarComponent.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import {onMounted, ref} from "vue";
import {SearchResults} from "../types/SearchResults";
import {userAdapter} from "../adapter/UserAdapter";
import {journeyAdapter} from "../adapter/JourneyAdapter";
import SearchResult from '../components/search/SearchResult.vue';
import {ResultType} from "../types/Search";
import {useSearchStore} from "../store/SearchStore";

let loading = ref(false)
let usersShown = ref(true)
let journeysShown = ref(true)

const searchStore = useSearchStore()

onMounted(() => {

})

const search = async (event) => {
  console.log(event);
  searchStore.searchValue = event
  loading.value = true;
  const users = await userAdapter.queryUsers(event)
  const journeys = await journeyAdapter.queryJourneys(event);
  searchStore.searchResults = {
    journeys,
    users
  }
  loading.value = false
}

const toggleUsers = () => usersShown.value = !usersShown.value;

const toggleJourneys = () => journeysShown.value = !journeysShown.value;

const getResultItems = () => {
  // TODO sort
  const items = []
  if (usersShown.value) {
    searchStore.searchResults.users.forEach(user => {
      items.push({type: ResultType.USER, result: user})
    })
  }
  if (journeysShown.value) {
    searchStore.searchResults.journeys.forEach(journey => {
      items.push({ type: ResultType.JOURNEY, result: journey})
    })
  }
  return items;
}
</script>

<style lang="scss" scoped>
@import '../style/colors.scss';
@import '../style/misc.scss';

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

.filters {
  width: 100vw;
  height: 2em;
  display: flex;
  gap: .5em;
  padding: .5em;
  border-bottom: $border-default;

  p {
    margin: 0;
  }

  .user-results, .journey-results {
    border-radius: 1em;
    border: $border-default;
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }

  .active {
    background: $color-primary;
    color: $color-white;
  }
}
</style>
