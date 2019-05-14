<template lang='pug'>
    .Podcast(@click='goDeatil(podcast.id)')
      .Podcast__top
        img(:src="podcast.image")
      .Podcast__bottom
        h4.Podcast__bottom--name {{podcast.title}}
        .Podcast__bottom--desc
          | {{getDescription(podcast.description)}}
</template>

<script>
export default {
  props: ["podcast"],
  methods: {
    getDescription(desc) {
      if (desc) {
        if (desc.length > 150) return desc.substr(0, 150) + "...";
        else return desc;
      }
    },
    goDeatil(id) {
      this.$router.push({ name: "listen", params: { id } });
      this.$store.commit("setPodcastname", this.podcast.title);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.Podcast {
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem;

  @include res(tab) {
    margin: 0;
  }

  &__top {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    overflow: hidden;

    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
    }
  }

  &__bottom {
    background-color: lighten($bg-main, 10%);
    color: $font-color;
    padding: 2rem;
    height: 20rem;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    &--name {
      text-transform: uppercase;
    }

    &--desc {
      font-size: 13px;
      margin-top: 1rem;
      font-weight: 400;
    }
  }
}
</style>