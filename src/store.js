import Vue from 'vue';
import Vuex from 'vuex';

import http from './utils/axios-config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    podcasts: [],
    podcast: [],
    podcastTitle: '',
    pageNumber: 1,
    audioFile: '',
  },
  mutations: {
    SET_PODCASTS(state, payload) {
      state.podcasts = state.podcasts.concat(payload);
    },
    SET_PODCAST(state, payload) {
      state.podcast = payload;
    },
    SET_PODCAST_NAME(state, payload) {
      state.podcastTitle = payload;
    },
    INC_PAGE_NUMBER(state) {
      state.pageNumber += 1;
    },
    SET_AUDIO_FILE(state, payload) {
      state.audioFile = payload;
    },
  },
  actions: {
    async getPodcasts({ commit, state }) {
      if (state.pageNumber <= 5) {
        const res = await http.get(`/best_podcasts?page=${state.pageNumber}&region=tr&safe_mode=1`);
        commit('SET_PODCASTS', res.data.podcasts);
      }
    },
    async getPodcast({ commit }, podcastID) {
      const res = await http.get(`/podcasts/${podcastID}?next_episode_pub_date=1479154463000&sort=recent_first`);
      commit('SET_PODCAST', res.data);
    },
  },
});
