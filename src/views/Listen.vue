<template lang='pug'>
	.wrapper
		.container
			.Listen
				h1.Listen__header {{podcastTitle}}
				.Listen__podcast(v-for='pod in podcast.episodes')
					.Listen__podcast__img
						img(:src='podcast.image', style='height: 80px; width: 80px')
					.Listen__podcast__info
						.Listen__podcast__title 
							h3 {{pod.title}}
						.Listen__podcast__desc
							p(v-html='pod.description')
					button.Listen__podcast--btn(@click='play(pod.audio)') 
						iconPlay.Listen__podcast--btn-icon
						| Dinle
		.Player
			VueAudio(:file='audio')

</template>


<script>
import { mapState } from "vuex";
import VueAudio from "vue-audio";
import iconPlay from "../assets/icon-play";
export default {
  data() {
    return {
      podcastID: "",
      audio: ""
    };
  },
  components: {
    VueAudio,
    iconPlay
  },
  computed: {
    ...mapState(["podcast", "podcastTitle"])
  },
  methods: {
    play(audio) {
      this.audio = audio;
    }
  },
  created() {
    const podcastID = this.$route.params.id;
    this.$store.dispatch("getPodcast", podcastID);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.container {
  width: 120rem;
  margin: 0 auto;
}

.Listen {
  color: $font-color;
  margin-bottom: 10rem;

  &__header {
    font-size: 6rem;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($font-color, 0.3);
    padding-bottom: 1rem;
  }

  &__podcast {
    display: flex;
    border-bottom: 1px solid rgba($font-color, 0.1);
    padding: 1rem 0;
    cursor: pointer;
    position: relative;

    &__img {
      margin-right: 3rem;
    }

    &__title {
      margin-bottom: 1rem;
      width: 80%;
    }

    &__desc {
      font-size: 14px;
      width: 80%;
    }

    &--btn {
      background-color: #1abb9c;
      padding: 0.5rem 2rem;
      border-radius: 10rem;
      color: $font-color;
      cursor: pointer;
      font-weight: 700;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      outline: none;

      &-icon {
        margin-right: 1rem;
        fill: $font-color;
      }
    }
  }
}

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
</style>