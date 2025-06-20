import { createPinia } from 'pinia';
import { createApp } from 'vue';

import './styles/base.less';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const piniaInstance = createPinia();
app.use(piniaInstance);

app.use(router);

app.mount('#app');
