<template lang="pug">
	.Podcasts
		Podcast(v-for="podcast in podcasts" 
		:key='podcast.id' 
		:podcast="podcast")
</template>

<script>
import Podcast from "./Podcast";
import { mapState } from "vuex";
import http from "../utils/axios-config";

export default {
  components: {
    Podcast
  },
  computed: {
    ...mapState(["podcasts"])
  },
  created() {
    this.$store.dispatch("getPodcasts");
  }
};
</script>

<style lang="scss" scoped>
.Podcasts {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  width: 120rem;
  margin-top: 3rem;
}
</style>
