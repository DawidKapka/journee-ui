<template>
<ion-page>
  <div class="content">
    <div class="overview">
      <div class="back" @click="goBack" v-if="back">
        <i class="pi pi-angle-double-left"></i>
      </div>
      <div class="user-info" v-if="!userNotFound">
        <div class="profile-pic-container">
          <img src="../assets/profile-pic-default.jpg" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="stats">
          <div class="stat">
            <h2 class="stat-value text-light">{{ formatNumber(userInfo.journeyAmount) ?? '...' }}</h2>
            <p class="stat-title text-light">journeys</p>
          </div>
          <div class="stat">
            <h2 class="stat-value text-light">{{ formatNumber(userInfo.followers) ?? '...'}}</h2>
            <p class="stat-title text-light">followers</p>
          </div>
          <div class="stat">
            <h2 class="stat-value text-light">{{ formatNumber(userInfo.following) ?? '...'}}</h2>
            <p class="stat-title text-light">following</p>
          </div>
        </div>
      </div>
      <div class="username-container" v-if="!userNotFound">
        <div class="username-wrapper">
          <h2 class="username text-light">{{ userInfo.username ?? ' ' }}</h2>
          <p class="user-tag text-light subtext">@{{userInfo.usertag}}</p>
        </div>
      </div>
      <div class="bio" v-if="!userNotFound">
        <p class="bio-text text-light">
          {{ userInfo.bio ?? '...'}}
        </p>
      </div>
      <div class="options" v-if="!userNotFound">
        <button-component theme="inverted" v-if="isOwnProfile">edit profile</button-component>
        <button-component theme="inverted" v-if="!isOwnProfile && !isFollowing" @click="follow">follow</button-component>
        <button-component theme="success" v-if="!isOwnProfile && isFollowing" @click="unfollow">following</button-component>
        <button-component theme="inverted">
          <i class="pi pi-list"></i>
        </button-component>
      </div>
    </div>
    <div class="not-found" v-if="userNotFound">
      <h2 class="not-found-text">Sorry, this user doesn't exist.</h2>
    </div>
    <div class="journeys" v-if="!userNotFound">
      <journey-cover-component v-for="journey of journeyPreviews" :key="journey.jid" :title="journey.title" :imageUrl="journey.imageUrl"></journey-cover-component>
    </div>
  </div>
</ion-page>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import JourneyCoverComponent from "@/components/JourneyCoverComponent.vue";
import {onMounted, ref} from "vue";
import {UserInfo} from "../types/User";
import {userAdapter} from "../adapter/UserAdapter";
import {useRoute, useRouter} from "vue-router";
import {JourneyPreview} from "../types/JourneyPreview";
import {journeyAdapter} from "../adapter/JourneyAdapter";

let isFollowing = ref(false)
let isOwnProfile = ref(false);
let userInfo = ref({} as UserInfo)
let journeyPreviews = ref([] as JourneyPreview[])
let userNotFound = ref(false)
let back = ref(false)

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.query.b && route.query.b === '1') {
    back.value = true;
  }
  if (!route.query.uid) {
    userNotFound.value = true;
  } else {
    userAdapter.fetchUserProfile().then(info => {
      userInfo.value = info as UserInfo
      journeyAdapter.fetchAllJourneyPreviewsForUser(userInfo.value.usertag).then(journeys => journeyPreviews.value = journeys as JourneyPreview[])
    })
  }
})

const goBack = () => {
  router.back()
}

const follow = () => {
  isFollowing.value = true
  // TODO
}

const unfollow = () => {
  isFollowing.value = false;
}

const formatNumber = (number) => {
  if (number) {
    const numbers = `${number}`.split('')
    if (numbers.length === 4) {
      return `${numbers[0]}'${numbers[1]}${numbers[2]}${numbers[3]}`
    }
    if (numbers.length === 5) {
      return `${numbers[0]}${numbers[1]}'${numbers[2]}${numbers[3]}${numbers[4]}`
    }
    if (numbers.length === 6) {
      return `${numbers[0]}${numbers[1]}${numbers[2]}k`
    }
    if (numbers.length === 6) {
      return `${numbers[0]}${numbers[1]}${numbers[2]}k`
    }
    if (numbers.length === 7) {
      return `${numbers[0]}.${numbers[1]}M`
    }
    if (numbers.length === 8) {
      return `${numbers[0]}${numbers[1]}.${numbers[2]}M`
    }
    if (numbers.length === 9) {
      return `${numbers[0]}${numbers[1]}${numbers[2]}.${numbers[3]}M`
    }
    return numbers.join('')
  } else return undefined
}
</script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.overview {
  width: 100vw;
  background: $color-primary;
  border-bottom: $border-default;
  padding: 3em;

  .user-info {
    height: 5em;
    width: calc(100% - 6em);
    display: flex;

    .profile-pic-container {
      height: 100%;
      width: 5em;
      border-radius: 50%;
      overflow: hidden;

      .profile-pic {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
      }
    }
  }

  .username-container {
    margin-top: 1em;
    display: flex;
    align-items: center;

    .username {
      margin-bottom: .25em;
    }
  }

  .bio {
    width: calc(100% - 6em);
    overflow: hidden;
    margin-top: 1em;

    .bio-text {
      word-wrap: break-word;
    }
  }

  .options {
    margin-top: 1em;
    display: flex;
    gap: .5em;
  }
}

.journeys {
  width: calc(100% - 4em);
  padding: 2em 2em 5em 2em;
  overflow-y: scroll;

  .journey {
    margin-bottom: 2em;
  }
}

.stats {
  margin-left: 1em;
  width: calc(100% - 6em);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.not-found-text {
  width: 100vw;
  text-align: center;
  margin-top: 2em;
}

.back {
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  top: 1em;
  left: .5em;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: $color-white;
    font-size: 1.5em;
  }
}
</style>
