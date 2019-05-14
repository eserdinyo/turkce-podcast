<template lang='pug'>
	#app
		Header
		transition(name='page', mode='out-in')
			router-view
		.Player(v-if='audioFile')
			VueAudio(:file='audioFile')
</template>

<script>
import VueAudio from 'vue-audio';
import { mapState } from 'vuex';
import Header from './components/Header';

export default {
  components: {
    Header,
    VueAudio,
  },
  computed: {
    ...mapState(['audioFile']),
  },
};
</script>

<style lang="scss">
@import "@/style/main.scss";

.Player {
  position: fixed;
  bottom: 0;
  background-color: $bg-podcast;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
