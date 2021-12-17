import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue'
import HelloPage from '@/pages/Hello.vue';
import JustMovingPage from '@/pages/JustMoving.vue';
import WhatNextPage from '@/pages/WhatNext.vue';

const BASE_URL = '/can-you-catch-circle/';

const routes = [
  { path: '', component: HelloPage },
  { path: '/just-moving', component: JustMovingPage },
  { path: '/what-next', component: WhatNextPage },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
});

createApp(App).use(router).mount('#app');