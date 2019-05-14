import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

import './style/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');



/* router.afterEach(() => {
  window.scrollTo(0, 0);
}) */

/* router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  
  console.log(to.matched.some(record => record.meta.isAuth));
  next();
  
  if(to.meta.isAuth) {
    router.push({name: 'login'})
  }else{
    next();
  } 
}) */