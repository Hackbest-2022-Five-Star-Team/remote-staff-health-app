/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

// createApp(App).use(store).use(router).mount("#app");

createApp(App)
  .use(store)
  .use(router)
  // eslint-disable-next-line prettier/prettier
  .use(BootstrapVue as any)
  .use(BootstrapVueIcons as any)
  .mount('#app');
