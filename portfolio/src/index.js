import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from './components/HomeComp/Home.vue';
import AboutComp from './components/AboutMeComp/About.vue';
import ProjectsComp from './components/ProjectsComp/Projects.vue';


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
    path: '/projects',
    name: 'projects',
    component: ProjectsComp
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
