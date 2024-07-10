import { createRouter, createWebHistory } from "vue-router";

import Homepage from './components/pages/Homepage.vue';
import Login from "./components/pages/Login.vue";
import Signin from "./components/pages/Signin.vue";
import News from "./components/pages/News.vue";
import Contact from "./components/pages/Contact.vue";
import Curiosities from "./components/pages/Curiosities.vue";
import Forecast from "./components/pages/Forecast.vue";

const router= createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin,
        },
        {
            path: '/news',
            name: 'News',
            component: News,
          },
          {
            path: '/contact',
            name: 'Contact',
            component: Contact
          },
          {
            path: '/curiosities',
            name: 'Curiosities',
            component: Curiosities
          },
          {
            path: '/forecast',
            name: 'Forecast',
            component: Forecast
          },
          
    ]

})

export{router};