<template>
  <div class="user-result" @click="navigateToUser">
    <div class="profile-pic">
      <img :src="user.profilePic" :alt="user.username" v-if="user.profilePic" class="profile-pic">
      <img src="../../assets/profile-pic-default.jpg" :alt="user.username" v-if="!user.profilePic" class="profile-pic">
    </div>
    <div class="username-container ">
      <h4 class="username">{{ user.username }}</h4>
      <p class="subtext usertag">@{{user.usertag}}</p>
    </div>
    <div class="icon-container">
      <i class="pi pi-angle-double-right"></i>
    </div>
  </div>
</template>

<script setup lang="ts">

import {UserInfo} from "../../types/User";
import {useRouter} from "vue-router";

const props = defineProps<{
  user: UserInfo
}>()

const router = useRouter();

const navigateToUser = () => {
  console.log(props.user);
  router.push(`/user?uid=${props.user.usertag+'1'}&b=1`)
}

</script>

<style lang="scss" scoped>
@import '../../style/colors.scss';
@import '../../style/misc.scss';

.user-result {
  width: calc(100% - 2em);
  height: 4em;
  margin: 1em;
  border: $border-default;
  border-radius: 1em;
  box-shadow: $shadow-default;
  display: flex;

  &:active {
    background: $color-white-active;
  }
}

.profile-pic {
  height: 4em;
  width: 4em;
  border-radius: 50%;
}

.username-container {
  width: calc(80% - 4em);
  display: flex;
  height: 4em;
  flex-direction: column;
  justify-content: center;
  margin-left: .5em;
}

.icon-container {
  width: 20%;
  height: 4em;
  display: flex;
  justify-content: space-around;
  align-items: center;
}


</style>
