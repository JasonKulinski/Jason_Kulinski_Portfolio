import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from './components/HomeComp/Home.vue';
import AboutComp from './components/AboutMeComp/About.vue';
import ContentComp from './components/ContentComp/Content.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  },
  {
    path: '/content',
    name: 'content',
    component: ContentComp
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
