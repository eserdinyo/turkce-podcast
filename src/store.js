import Vue from 'vue';
import Vuex from 'vuex';

import http from './utils/axios-config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    podcasts: [],
    podcast: [],
    podcastTitle: '',
  },
  mutations: {
    setPodcasts(state, payload) {
      state.podcasts = payload;
    },
    setPodcast(state, payload) {
      state.podcast = payload
    },
    setPodcastname(state, payload) {
      state.podcastTitle = payload;
    }
  },
  actions: {
    async getPodcasts({ commit }) {
      const res = await http.get('/best_podcasts?page=4&region=tr&safe_mode=1');
      commit('setPodcasts', res.data.podcasts);
    },
    async getPodcast({ commit }, podcastID) {
      const res = await http.get(`/podcasts/${podcastID}?next_episode_pub_date=1479154463000&sort=recent_first`);
      commit('setPodcast', res.data);
    }
  },
});
