<template>
  <div class="post">
    <img src="../../assets/journey-default.jpg" alt="" class="image">
    <div class="desc">
      <p class="desc-text">
        <span class="username">testuser_</span>
        <span class="description" v-html="parseDescription('Test Description 🤪 #test')"></span>
      </p>
    </div>
    <div class="comments">
      <p class="show-comments subtext" @click="showComments">See comments...</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const parseDescription = (description) => {
  const words = description.split(' ')
  const parsed = []
  words.forEach(word => {
    if (word.startsWith('#')) {
      parsed.push(`<span class="hashtag">${word}</span>`)
    } else {
      parsed.push(word)
    }
  })
  return parsed.join(' ')
}

const showComments = () => {
  // TODO
}

</script>

<style lang="scss">
@import '../../style/colors.scss';
@import '../../style/misc.scss';

.post {
  width: 100vw;
  margin: 2em 0 2em 0;

  .image {
    width: 100vw
  }

  .desc {
    width: 100vw;
    margin: .25em;

    .username {
      font-weight: bold;
      margin-right: .5em;

      &:active {
        text-decoration: underline;
      }
    }

    .hashtag {
      color: primary-opacity(.5);

      &:active {
        color: primary-opacity(.7);
        text-decoration: underline;
      }
    }
  }

  .show-comments {
    margin: .5em .25em .25em .25em;
  }
}
</style>
