<template lang="pug">
	.Podcasts
		Podcast(v-for="(podcast, idx) in podcasts"
		:key='idx'
		:podcast="podcast")
</template>

<script>
import { mapState } from 'vuex';
import Podcast from './Podcast';
import http from '../utils/axios-config';

export default {
  components: {
    Podcast,
  },
  computed: {
    ...mapState(['podcasts', 'pageNumber']),
  },
  methods: {
    getMorePodcasts() {
      this.$store.dispatch('getPodcasts');

      window.onscroll = (ev) => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          this.$store.commit('INC_PAGE_NUMBER');
          this.$store.dispatch('getPodcasts');
        }
      };
    },
  },

  created() {
    this.getMorePodcasts();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.Podcasts {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  margin-top: 3rem;

  @include res(tab) {
    grid-template-columns: repeat(4, 1fr);
    margin: 3rem 2rem 0 2rem;
  }

  @include res(big) {
    width: 120rem;
    grid-template-columns: repeat(5, 1fr);
    margin: 3rem auto;
  }
}
</style>
