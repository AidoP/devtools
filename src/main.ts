import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style/main.css';
import app from './app.vue';
import routes from './view/routes';

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

createApp(app)
    .use(router)
    .mount('#app');
