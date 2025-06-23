import { createPinia } from 'pinia';
import { createApp } from 'vue';

import './styles/base.less';
import i18n from '@/locales';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const piniaInstance = createPinia();
app.use(piniaInstance);

app.use(i18n);
app.use(router);

app.mount('#app');
