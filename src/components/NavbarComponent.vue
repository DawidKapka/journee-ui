<template>
  <nav class="navigation">
    <div class="nav-item" @click="toggleTab(Tab.FEED)" :class="{'active': currentTab === Tab.FEED}">
      <i class="pi pi-map icon"></i>
    </div>
    <div class="nav-item" @click="toggleTab(Tab.SEARCH)" :class="{'active': currentTab === Tab.SEARCH}">
      <i class="pi pi-search icon"></i>
    </div>
    <div class="nav-item" @click="toggleTab(Tab.PROFILE)" :class="{'active': currentTab === Tab.PROFILE}">
      <i class="pi pi-user icon"></i>
    </div>
  </nav>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Tab} from "@/types/Tab.js";
import router from "@/router";
import {useRoute} from "vue-router";
import {userAdapter} from "../adapter/UserAdapter";

let currentTab = ref(Tab.FEED)

const route = useRoute()

onMounted(() => {
  userAdapter.fetchCurrentUser().then(user => {
    if (route.query.uid && route.query.uid !== user.usertag) {
      currentTab.value = Tab.SEARCH
    } else if (route.path.startsWith('/search')) {
      currentTab.value = Tab.SEARCH
    } else if (route.path.startsWith('/home')) {
      currentTab.value = Tab.FEED;
    } else {
      currentTab.value = Tab.PROFILE
    }
  })
})

const toggleTab = (tab) => {
  router.push(mapTabToPath(tab))
  currentTab.value= tab;
}

const mapTabToPath = (tab) => {
  switch (tab) {
    case Tab.FEED:
      return '/home';
    case Tab.SEARCH:
      return '/search';
    case Tab.PROFILE:
      return '/user?uid=testuser_';
    default:
      return '/home';
  }
}

const mapPathToTab = (path) => {
  switch (path.split('/')[1]) {
    case 'home':
      return Tab.FEED;
    case 'search':
      return Tab.SEARCH;
    case 'user':
      return Tab.PROFILE;
    default:
      return Tab.FEED;
  }
}

</script>

<style lang="scss">
@import "../style/colors.scss";
@import "../style/misc.scss";

.navigation {
  width: 100vw;
  height: 4em;
  background: $color-white;
  border-top: $border-default;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  font-size: 2em;
  color: black-opacity(.5);
}

.active {
  background: $color-white-active;

  .icon {
    color: $color-black;
  }
}

</style>
