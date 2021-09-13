import { createRouter, createWebHistory } from 'vue-router';
import demoRoutes from '../demos/demo-routes';
import Home from '../views/Home.vue';
import Demos from '../views/Demos.vue';
import Users from '../views/Users.vue';
import Transactions from '../views/Transactions.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/demos',
    name: 'Demos',
    component: Demos,
    children: demoRoutes,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
];

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} );

export default router;
