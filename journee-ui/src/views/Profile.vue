<template>
<ion-page>
  <div class="content">
    <div class="overview">
      <div class="user-info">
        <div class="profile-pic-container">
          <img src="../assets/profile-pic-default.jpg" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="stats">
          <div class="stat">
            <h2 class="stat-value text-light">10</h2>
            <p class="stat-title text-light">journeys</p>
          </div>
          <div class="stat">
            <h2 class="stat-value text-light">420k</h2>
            <p class="stat-title text-light">followers</p>
          </div>
          <div class="stat">
            <h2 class="stat-value text-light">69</h2>
            <p class="stat-title text-light">following</p>
          </div>
        </div>
      </div>
      <div class="username-container">
        <div class="username-wrapper">
          <h2 class="username text-light">Test User</h2>
          <p class="user-tag text-light subtext">@testuser_</p>
        </div>
      </div>
      <div class="bio">
        <p class="bio-text text-light">
          Hi there, welcome to Journee! Feel free to look through my journey memories.
        </p>
      </div>
      <div class="options">
        <button-component theme="inverted">edit profile</button-component>
        <button-component theme="inverted">
          <i class="pi pi-list"></i>
        </button-component>
      </div>
    </div>
    <div class="journeys">
      <journey-cover-component class="journey"></journey-cover-component>
      <journey-cover-component class="journey"></journey-cover-component>
      <journey-cover-component class="journey"></journey-cover-component>
      <journey-cover-component class="journey"></journey-cover-component>
      <journey-cover-component class="journey"></journey-cover-component>
    </div>
  </div>
</ion-page>
</template>

<script setup lang="ts">

import ButtonComponent from "@/components/ButtonComponent.vue";
import JourneyCoverComponent from "@/components/JourneyCoverComponent.vue";
</script>

<style lang="scss">
@import '../style/colors.scss';
@import '../style/misc.scss';

.content {
  width: 100vw;
  height: 100%;
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
  height: calc(100% - 10em);
  padding: 2em 2em 5em 2em;
  overflow-y: scroll;

  .journey {
    margin-bottom: 1em;
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
</style>
