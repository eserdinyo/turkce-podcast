<template lang="pug">
  .Home
    PodcastList
</template>

<script>
import PodcastList from '../components/PodcastList';

export default {
  name: 'home',
  components: {
    PodcastList,
  },
};
</script>
