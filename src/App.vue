<template>
  <div id="app">
    <Header/>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
.icon-stop2 {
  display: none !important;
}
.vue-sound__playback-time-current,
.vue-sound__playback-time-separator,
.vue-sound__playback-time-total {
  color: #6cc79d !important;
  margin-top: 5px !important;
  display: inline-block;
  margin: 0 2px;
}

.vue-sound-wrapper {
  margin-bottom: 2rem !important;
}
.vue-sound__extern-wrapper {
  display: none !important;
}

.icon-play3,
.icon-pause2 {
  color: #6cc79d;
  font-size: 5rem;
  margin-right: 2rem;
}

.vue-sound__playback-time-wrapper {
  height: 5px !important;
  border-radius: 3px !important;
}
.vue-sound__playback-time-indicator {
  background-color: #6cc79d !important;
  border-radius: 3px !important;
}
</style>
