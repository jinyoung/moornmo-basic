import Vue from 'vue'
import Router from 'vue-router'

import BasicProductManager from "./components/listers/BasicProductCards"
import BasicProductDetail from "./components/listers/BasicProductDetail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/basics/products',
            name: 'BasicProductManager',
            component: BasicProductManager,
        },
        {
            path: '/basics/products/:id',
            name: 'BasicProductDetail',
            component: BasicProductDetail,
        },
    ]
})
