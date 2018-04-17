import Vue from 'vue';
import Router from 'vue-router';


import HomeRoutes from './home';
import DetailsRoutes from './details';
import CartRoutes from './cart';

Vue.use(Router);

export default new Router({
  routes: [
    HomeRoutes,
    DetailsRoutes,
    CartRoutes,
  ],
});
