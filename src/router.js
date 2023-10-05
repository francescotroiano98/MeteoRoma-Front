import { createRouter, createWebHistory } from "vue-router";

import Homepage from './components/pages/Homepage.vue';

const router= createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
        },
       
    ]

})

export{router};